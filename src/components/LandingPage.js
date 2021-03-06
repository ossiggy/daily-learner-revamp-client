import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Jumbotron} from 'reactstrap';

import SignUpForm from './SignUpForm';

import '../css/LandingPage.css'

export function LandingPage(props) {

  if(props.loggedIn){
    return <Redirect to="/dashboard" />
  }

  return (
    <div className='lander'>
      <Jumbotron className="jumbo-top">
        <h1 className='jumbo-title'>Track your mind</h1>
        <p className='display-5'>Shower ideas, epiphanies, moments of clarity, all of it</p>
        <hr/>
        <p className='lead'>Never forget the hard earned lessons you acquire daily</p>
      </Jumbotron>

      <Jumbotron className="jumbo-bottom">
        <h1 className='jumbo-title'>Access Anywhere</h1>
        <p className='display-5'>Keep your journal with you on the go</p>
        <hr/>
        <p className='lead'>Have the information ready when you need it most</p>
      </Jumbotron>

      <SignUpForm />
    </div>
  );
}

export const mapStateToProps = state => {
  return {
    loggedIn: true,
  };
};

export default connect(mapStateToProps)(LandingPage);