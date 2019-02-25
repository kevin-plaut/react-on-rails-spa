import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import {
  Table, Col, Row, ListGroup, ListGroupItem
} from 'react-bootstrap'
import AuthService from '../../services/AuthService'

const Auth = new AuthService()
const BASE = 'http://localhost:3000'

class Posts extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
  fetch(BASE + "/posts")
    .then(response => {
      return response.json();
    })
    .then(d => {
      this.setState({ posts: d });
      console.log("state", this.state.posts)
    })
    .catch(error => console.log(error))
}

  render() {
    return (
      <div>
        {!Auth.loggedIn() &&
          <Redirect to="/"/>
        }
        {Auth.loggedIn() &&
          <div className="center">
            <Table>
              <br />
              <h1>
                Posts
              </h1>
              <Row className="post-row">
                <h3 className="posts-subtitle">
                  <small className="text-muted">
                    All the posts!
                  </small>
                </h3>
                <Col>
                  <ListGroup variant="flush">
                    <ListGroupItem />
                    {
                      this.state.posts.reverse().map(((post, index) =>
                        <ListGroupItem key={`${post.post}${index}`}>
                          <div>
                            <div>
                              {post.post}
                            </div>
                          </div>
                        </ListGroupItem>
                      ))
                    }
                    <ListGroupItem />
                  </ListGroup>
                </Col>
              </Row>
            </Table>
          </div>
        }
      </div>
    )
  }
}

export default Posts
