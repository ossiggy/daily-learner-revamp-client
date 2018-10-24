import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form, FormGroup, Label, Input, Jumbotron} from 'reactstrap';

// import {registerUser} from '../actions/users';
// import {login} from '../actions/auth';
// import {required, nonEmpty, matches, length, isTrimmed, email} from '../validators';

import "../css/SignUpForm.css";

export class SignUpForm extends Component{
  
  render(){
    console.log(this.props)
    return(
      <Jumbotron className="sign-up-form">
        <h1 className="sign-up-title">Sign Up</h1>
        <Form>
          <FormGroup>
            <Label for="sign-up-username">Username</Label>
            <Input type="text" name="sign-up-username" id="sign-up-username" placeholder="buddha"/>
          </FormGroup>
          <FormGroup>
            <Label for="sign-up-email">Email</Label>
            <Input 
            type="email" 
            name="email" 
            id="sign-up-email" 
            placeholder="example@example.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="sign-up-password">Password</Label>
            <Input type="password" name="password" id="sign-up-password" placeholder="*******"/>
          </FormGroup>
          <FormGroup>
            <Label for="sign-up-password-confirm">Confirm Password</Label>
            <Input type="password" name="password" id="sign-up-confirm-password" placeholder="*******"/>
          </FormGroup>
          <Button outline color="primary">Submit</Button>
        </Form>
      </Jumbotron>
    )
  }
}

const mapStateToProps = state => {
  return{
    validate: {
      emailState: ""
    }
  }
}

export default connect(mapStateToProps)(SignUpForm)