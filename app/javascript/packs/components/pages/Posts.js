import React, {Component} from 'react'
import {
  Table, Col, Row, ListGroup, ListGroupItem
} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import AuthService from '../../services/AuthService'
import { getPosts } from '../../api'

const Auth = new AuthService()

class Posts extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  render() {
    return (
      <div className="center">
        <h1>Posts</h1>
        <br />
        <Table>
          <Row>
            <Col xs={12}>
              <ListGroup>
                {this.props.posts}
              </ListGroup>
            </Col>
          </Row>
        </Table>
      </div>
    )
  }
}

export default Posts;
