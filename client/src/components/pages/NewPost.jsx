import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Card, Form, Button } from 'react-bootstrap'
import { GoCloudUpload, GoX } from 'react-icons/go'
import AuthService from '../../services/AuthService'
import PostService from '../../services/PostService'
import withAuth from '../../services/withAuth'
import axiosClient from '../../../../axiosClient'

const Auth = new AuthService()
const Post = new PostService()

class NewPost extends Component {
  constructor() {
    super()
    this.state = {
      selectedPostFiles: [],
      post: {
        comment: '',
        user_id: Auth.getUserId(),
        image_url: '',
        photo_file_name: '',
        photo_content_type: '',
        photo_file_size: '',
        photo_updated_at: ''
      },
      createSuccess: false
    }
  }

  handleChange(event) {
    let post = this.state.post
    post[event.target.name] = event.target.value
    this.setState({ post: post })
    console.log(this.state)
  }

  getNumberOfSelectedFiles() {
    return this.state.selectedPostFiles.filter(el => {
      return el._destroy !== true
    }).length
  }

  renderUploadPostsButton() {
    let numberOfSelectedPosts = this.getNumberOfSelectedFiles()
    return (
      <div>
        <input
          name="posts[]"
          ref={field => (this.postsField = field)}
          type="file"
          disabled={this.state.isSubmittingForm}
          accept="image/*"
          multiple={true}
          style={{
            width: 0.1,
            height: 0.1,
            opacity: 0,
            overflow: 'hidden',
            position: 'absolute',
            zIndex: -1
          }}
          id="posts"
          onChange={e => this.handlePostsChange(e)}
          className="form-control"
        />
        <label
          disabled={this.state.isSubmittingForm}
          className="btn btn-dark"
          htmlFor="posts"
        >
          <GoCloudUpload />
          &nbsp; &nbsp;
          {numberOfSelectedPosts === 0
            ? 'Upload Files'
            : `${numberOfSelectedPosts} file${
                numberOfSelectedPosts !== 1 ? 's' : ''
              } selected`}
        </label>
      </div>
    )
  }

  handlePostsChange() {
    let selectedFiles = this.postsField.files
    let { selectedPostFiles } = this.state
    for (let i = 0; i < selectedFiles.length; i++) {
      selectedPostFiles.push(selectedFiles.item(i))
    } //end for

    this.setState(
      {
        selectedPostFiles: selectedPostFiles
      },
      () => {
        this.postsField.value = null
        console.log(this.state)
      }
    )
  }

  renderSelectedPostFiles() {
    let fileDOMs = this.state.selectedPostFiles.map((el, index) => {
      if (el._destroy) {
        // we use _destroy to mark the removed photo
        return null
      }

      return (
        <div className="photos" key={index}>
          <li>
            <div className="photo">
              <img
                width={155}
                src={el.id ? el.url : URL.createObjectURL(el)}
                style={{ alignSelf: 'center' }}
              />
              <GoX
                className="remove"
                onClick={() => this.removeSelectedPostFile(el, index)}
              />
            </div>
            <div className="file-name">{el.name}</div>
          </li>
        </div>
      )
    })

    return <ul className="selected-posts">{fileDOMs}</ul>
  }

  removeSelectedPostFile(photo, index) {
    let { selectedPostFiles } = this.state
    if (photo.id) {
      // photo file that has been uploaded will be marked as destroy
      selectedPostFiles[index]._destroy = true
    } else {
      selectedPostFiles.splice(index, 1)
    }

    this.setState({
      selectedPostFiles: selectedPostFiles
    })
  }

  handleFormSubmit() {
    let { post } = this.state
    this.setState(
      {
        post: post
      },
      () => {
        this.submitForm()
      }
    )
  }

  buildFormData() {
    let formData = new FormData()
    formData.append('post[comment]', this.state.post.comment)
    formData.append('post[user_id]', this.state.post.user_id)

    var selectedPostFiles = this.state.selectedPostFiles
    var file = selectedPostFiles[selectedPostFiles.length - 1]
    formData.append('post[image_url]', file.webkitRelativePath)
    formData.append('post[photo_file_name]', file.name)
    formData.append('post[photo_content_type]', file.type)
    formData.append('post[photo_file_size]', file.size)
    formData.append('post[photo_updated_at]', file.lastModifiedDate)

    return formData
  }

  submitForm() {
    let submitMethod = this.state.post.id ? 'patch' : 'post'
    let url = this.state.post.id
      ? `/posts/${this.state.post.id}.json`
      : '/posts.json'

    axiosClient[submitMethod](url, this.buildFormData())
      // Post.createPost(Auth.getToken(), this.state.post)
      .then(response => {
        console.log('Post Success', response.createSuccess)
        this.setState({
          createSuccess: true
        })
      })
      .catch(err => {
        alert(err)
      })
  }

  render() {
    return (
      <div className="center">
        <h2>New Post</h2>
        <br />
        <Card className="new-post-card">
          <Form className="new-post-form">
            <Form.Group>
              <div className="form-group">
                <Form.Label>
                  <b>Image</b>
                </Form.Label>{' '}
                {this.renderUploadPostsButton()}
                {this.renderSelectedPostFiles()}
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <b>Comment</b>
              </Form.Label>
              <Form.Control
                type="text"
                name="comment"
                placeholder="ex: This is a picture of my human!"
                onChange={this.handleChange.bind(this)}
              />
            </Form.Group>
            <Button
              variant="dark"
              type="submit"
              className="center"
              onClick={this.handleFormSubmit.bind(this)}
            >
              Submit
            </Button>
            {this.state.createSuccess && <Redirect to="/viewposts" />}
          </Form>
        </Card>
        <br />
      </div>
    )
  }
}

export default withAuth(NewPost)
