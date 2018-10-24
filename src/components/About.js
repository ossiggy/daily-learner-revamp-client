import React from 'react';

import {Jumbotron} from 'reactstrap';

import '../css/About.css';

export default function About(props) {
  return (
    <div className="about">

      <Jumbotron className="jumbo-about-title">
        <h1 className='display-3'>The last journal you'll ever need</h1>
      </Jumbotron>

      <Jumbotron className="jumbo-about-top">
        <h1 className="display-5"><i>"You learn something new every day"</i></h1>
        <hr/>
        <p className="about-text">
          Imagine how much you could benefit from having a collection 
          of all that information on tap and ready to be accessed?
        </p>
      </Jumbotron>

      <Jumbotron className="jumbo-about-bottom">
        <h1 className="display-5"><i>Enter: Daily Learner</i></h1>
        <hr/>
        <p className="about-text">
          This app was designed specifically to keep track of your hard earned
          life lessons and organize them into an easily searchable database.  Just write down your lesson,
          add an applicable category, and voila! You can now track all the knowledge you gain on a daily basis.
        </p>
      </Jumbotron>

    </div>
  );
}