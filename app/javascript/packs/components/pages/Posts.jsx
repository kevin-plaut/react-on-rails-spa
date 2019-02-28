import React, {Component} from 'react'
import { Table, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'
import AuthService from '../../services/AuthService'
import PostService from '../../services/PostService'
import withAuth from '../../services/withAuth'

const Auth = new AuthService()
const Post = new PostService()
const BASE = 'http://localhost:3000'

class Posts extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    Post.getPosts(Auth.getToken())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
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
                  {this.state.posts.reverse().map(((post, index) =>
                      <ListGroupItem key={`${post.post}${index}`}>
                        <div>
                          <div>
                            {post.post}
                          </div>
                        </div>
                      </ListGroupItem>
                    ))}
                  <ListGroupItem />
                </ListGroup>
              </Col>
            </Row>
          </Table>
        </div>
      </div>
    )
  }
}

export default withAuth(Posts);
