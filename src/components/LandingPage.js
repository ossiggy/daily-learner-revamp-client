import React, {Component} from 'react';

import {Container, Row, Col, Jumbotron} from 'reactstrap';

import '../css/LandingPage.css'

export default function LandingPage(props) {
  return (
    <div className='lander'>
      <Jumbotron className="jumbo-intro">
        <h1 className='jumbo-title'>Track your mind</h1>
        <p className='display-5'>Shower ideas, epiphanies, moments of clarity, all of it</p>
        <hr/>
        <p className='lead'>Never again forget the hard earned lessons you acquire daily</p>
      </Jumbotron>
    </div>
  );
}