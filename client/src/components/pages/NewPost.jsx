import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { getPosts, updatePost } from '../../api/postApi.js'
import { Card, Form, Button } from 'react-bootstrap'
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
        comment: '',
        user_id: Auth.getUserId()
      },
      selectedImage: null,
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

    const { post, selectedImage } = this.state
    const new_post = Post.createPost(Auth.getToken(), this.state.post)

    if (selectedImage !== null) {
      new_post.append('image', selectedImage)
    }
    new_post
      .then(successPost => {
        console.log('Post Success', successPost)
        this.setState({ createSuccess: true })
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
              <Form.Label>
                <b>Image URL</b>
              </Form.Label>
              <Form.Control
                type="text"
                name="image_url"
                placeholder="ex: https://example.com/image.jpg"
                onChange={this.handleChange.bind(this)}
              />
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
