import React, {Component} from 'react'
import {
  Table, Col, Row, ListGroup, ListGroupItem
} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { getPosts } from '../../api'
import AuthService from '../../services/AuthService'
// import withAuth from '../../services/withAuth'

const Auth = new AuthService()
const BASE = 'http://localhost:3000'

class Posts extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    return fetch(BASE + '/posts')
      .then((resp) => {
        return resp.json()
      })
  }

  render() {
    const posts = this.state.posts.map((post, index) => <Posts key={post.id} id={post.id} post={post.post} />)

    return (
      <div className="center">
        <h1>Posts</h1>
        <br />
        <Table>
          <Row>
            <Col xs={12}>
              <ListGroup>
                {posts}
              </ListGroup>
            </Col>
          </Row>
        </Table>
      </div>
    )
  }
}

export default Posts;
