import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {
  Table, Row, Col, FormControl, Form
} from 'react-bootstrap'
import { getPosts, createPost } from '../../api'
import AuthService from '../../services/AuthService'
import PostService from '../../services/PostService'

class NewPost extends Component {
  constructor(props){
    super(props)
    this.Auth = new AuthService()
    this.Post = new PostService()
    this.state = {
      user_id: 2,
      post: ""
    };
    createSuccess: false
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChange(event){
    let post = event.target.value
    this.setState({ post: post })
    console.log(this.state)
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state)
    this.Post.createPost(this.state.post, this.state.user_id)
    .catch(err =>{ alert(err) })
  }

  render() {
    return(
      <div className="center">
        <h1>Create a Post!</h1>
        <br />
        <Table>
          <Row>
            <Form className="new-post-form">
              <Col>
                <FormControl
                  type="text"
                  name="post"
                  placeholder=""
                  onChange={this.handleChange.bind(this)}
                />
                <br/>
                <FormControl
                  type="submit"
                  id="submit"
                  className="submit"
                  onClick={this.handleSubmit.bind(this)}
                />
                {this.state.createSuccess && <Redirect to="/posts" /> }
              </Col>
            </Form>
          </Row>
        </Table>
        <br />
      </div>
    )
  }
}

export default NewPost;
