import React, {Component} from 'react'
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
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
            <br />
            <h1>
              Posts
            </h1>
            <br />
            <Container>
              <Row>
                {this.state.posts.map((post, index) =>
                  <div key={`${post.id}${index}`}>
                    <Col>
                      <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={post.image_url} />
                        <Card.Body>
                          <Card.Title>
                            {post.comment}
                          </Card.Title>
                          <Card.Text>
                            - {Auth.getUserName()}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <br />
                  </div>
                ).reverse()}
              </Row>
            </Container>
        </div>
      </div>
    )
  }
}

export default withAuth(Posts);
