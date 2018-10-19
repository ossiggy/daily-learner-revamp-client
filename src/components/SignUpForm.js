import React from 'react';

import {Button, Form, FormGroup, Label, Input, Jumbotron} from 'reactstrap';

import "../css/SignUpForm.css";

export default function SignUpForm(props){
  return(
    <Jumbotron className="sign-up-form">
      <h1 className="sign-up-title">Sign Up</h1>
      <Form>
        <FormGroup>
          <Label for="sign-up-email">Email</Label>
          <Input type="email" name="email" id="sign-up-email" placeholder="example@example.com"/>
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