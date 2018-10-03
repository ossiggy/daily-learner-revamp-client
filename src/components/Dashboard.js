import React, {Component} from 'react';
import LandingPage from './LandingPage';
import SignUpForm from './SignUpForm';

export default class Dashboard extends Component{
  render(){
    return (
      <div>
        <LandingPage />
        <SignUpForm />
      </div>
    )
  }
}