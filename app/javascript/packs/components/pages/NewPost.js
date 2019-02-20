import React, { Component } from 'react'
import {
  Table, Row, Col, FormControl, Form
} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import AuthService from '../../services/AuthService'

const Auth = new AuthService()

class NewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      form:{
        post: ""
      }
    }
  }

  handleChange(event){
    let {form} = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  handleSubmit(event){
    this.props.handleNew(this.state.form)
    event.preventDefault()
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
                  value={this.state.form.post}
                />
                <br/>
                <FormControl
                  type="submit"
                  id="submit"
                  className="submit"
                  onClick={this.handleSubmit.bind(this)}
                />
                {this.props.success &&
                  <Redirect to="/posts" />
                }
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
