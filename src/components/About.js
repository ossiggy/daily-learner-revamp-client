import React from 'react';

import {Jumbotron} from 'reactstrap';

import '../css/About.css';

export default function About(props) {
  return (
    <div>
      <Jumbotron className="jumbo-about">
        <h1 className='display-3'>The last journal you'll ever need</h1>
      </Jumbotron>
    </div>
  );
}