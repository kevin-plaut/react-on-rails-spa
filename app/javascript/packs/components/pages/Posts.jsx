import React, {Component} from 'react'
import { Table, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'
import AuthService from '../../services/AuthService'
import PostService from '../../services/PostService'
import withAuth from '../../services/withAuth'

const Auth = new AuthService()
const Post = new PostService()

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
              <h4 className="posts-subtitle">
                <small className="text-muted">
                  All the posts!
                </small>
              </h4>
              <Col>
                <ListGroup variant="flush">
                  <ListGroupItem />
                  {this.state.posts.map((post, index) =>
                      <ListGroupItem key={`${post.post}${index}`}>
                        <div>
                          <div>
                            {post.post}
                          </div>
                        </div>
                      </ListGroupItem>
                    ).reverse()}
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
