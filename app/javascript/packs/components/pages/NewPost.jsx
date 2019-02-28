import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Table, Row, Form, Col, FormControl } from 'react-bootstrap'
import AuthService from '../../services/AuthService'
import PostService from '../../services/PostService'
import withAuth from '../../services/withAuth'

const Auth = new AuthService()
const Post = new PostService()

class NewPost extends Component {
  constructor() {
    super()
    this.state = {
      new_post: {
        post: "",
        user_id: Auth.getUserId()
      },
      createSuccess: false,
    }
  }

  handleChange(event) {
    let post = this.state.new_post
    post[event.target.name] = event.target.value
    this.setState({ new_post: post })
  }

  handleSubmit(event) {
    event.preventDefault()
    Post.createPost(Auth.getToken(), this.state.new_post)
      .then (successPost => {
        console.log("Post Success", successPost);
        this.setState({createSuccess: true})
      })
      .catch(err =>{ alert(err) })
  }

  render() {
    return (
      <div>
        <div className="center">
          <h1>
            Create a Post
          </h1>
          <br />
          <Table>
            <Row>
              <Form className="post-form">
                <Col>
                  <FormControl
                    type="text"
                    name="post"
                    placeholder=""
                    onChange={this.handleChange.bind(this)}
                  />
                </Col>
                  <br/>
                <Col>
                  <FormControl
                    type="submit"
                    id="submit"
                    className="submit"
                    onClick={this.handleSubmit.bind(this)}
                  />
                  {this.state.createSuccess && <Redirect to="/viewposts" />}
                </Col>
              </Form>
            </Row>
          </Table>
          <br />
        </div>
      </div>
    )
  }
}

export default withAuth(NewPost);
