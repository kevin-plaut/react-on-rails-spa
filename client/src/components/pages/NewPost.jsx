import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Card, Form, Button } from 'react-bootstrap'
import { GoCloudUpload, GoX } from 'react-icons/go'
import AuthService from '../../services/AuthService'
import PostService from '../../services/PostService'
import withAuth from '../../services/withAuth'

const Auth = new AuthService()
const Post = new PostService()

class NewPost extends Component {
  constructor() {
    super()
    this.state = {
      post: {
        photo: [],
        comment: '',
        user_id: Auth.getUserId()
      },
      createSuccess: false
    }
  }

  handleChange(event) {
    let post = this.state.post
    post[event.target.name] = event.target.value
    this.setState({ post: post })
  }

  handleSubmit(event) {
    event.preventDefault()
    Post.createPost(Auth.getToken(), this.state.post)
      .then(successPost => {
        console.log('Post Success', successPost)
        this.setState({ createSuccess: true })
      })
      .catch(err => {
        alert(err)
      })
  }

  renderSelectedPostFile() {
    let fileDOM = this.state.post.photo.map((el, index) => {
      if (el._destroy) {
        // we use _destroy to mark the removed photo
        return null
      }

      return (
        <div className="photos">
          <li key={index}>
            <div className="photo">
              <img
                width={145.5}
                src={el.id ? el.url : URL.createObjectURL(el)}
                style={{ alignSelf: 'center' }}
              />
              <GoX
                className="remove"
                // onClick={() => this.removeSelectedPostFile(el, index)}
              />
            </div>
            <div className="file-name">{el.name}</div>
          </li>
        </div>
      )
    })

    return <ul className="selected-posts">{fileDOM}</ul>
  }

  // removeSelectedPostFile(photo) {
  //   let { photo } = this.state.post.photo
  //   if (photo.id) {
  //     // photo file that has been uploaded will be marked as destroy
  //     photo._destroy = true
  //   } else {
  //     photo.splice(0, 1)
  //   }

  //   this.setState({
  //     photo: photo
  //   })
  // }

  render() {
    return (
      <div className="center">
        <h2>New Post</h2>
        <br />
        <Card className="new-post-card">
          <Form className="new-post-form">
            <Form.Group>
              <Form.Label>
                <b>Image URL</b>
              </Form.Label>
              <Form.Control
                type="text"
                name="image_url"
                placeholder="ex: https://example.com/image.jpg"
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <Form.Label>
                <b>Image</b>
              </Form.Label>
              <br />
              <input
                name="photo[]"
                ref={field => (this.photo = field)}
                type="file"
                disabled={this.state.isSubmittingForm}
                multiple={false}
                accept="image/*"
                style={{
                  width: 0.1,
                  height: 0.1,
                  opacity: 0,
                  overflow: 'hidden',
                  position: 'absolute',
                  zIndex: -1
                }}
                id="photo"
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
              <label
                disabled={this.state.isSubmittingForm}
                className="btn btn-dark"
              >
                <GoCloudUpload />
                &nbsp; &nbsp; Upload File
              </label>
              {this.renderSelectedPostFile()}
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
              onClick={this.handleSubmit.bind(this)}
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
