import React, {Component} from 'react'
import {
  Table, Col, Row, ListGroup, ListGroupItem
} from 'react-bootstrap'
import AuthService from '../../services/AuthService'

const Auth = new AuthService()

class Posts extends Component {
  render() {
    return (
      <div className="center">
        <h1>Posts</h1>
        <br />
        <Table>
          <Row>
            <Col xs={12}>
              <ListGroup>
                {this.props.posts.map((post, index) =>{
                return (
                  <ListGroupItem
                    key={index}
                    header={
                      <h4>
                        <span className='post-post'>
                          {post.post}
                        </span>
                      </h4>
                    }>
                  </ListGroupItem>
                  )
                })}
              </ListGroup>
            </Col>
          </Row>
        </Table>
      </div>
    )
  }
}

export default Posts;
