import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Jumbotron, Button} from 'reactstrap'

export class Dashboard extends Component{
  render(){

    if(this.props.loggedIn===false){
      return <Redirect to="/" />
    }

    return (
      <div className="dashboard">
        <Jumbotron className="jumbo-dash-title">
          <h1 className='jumbo-title'>Time to grow</h1>
        </Jumbotron>
        <Link to="/new-lesson">
          <Button className="dash-button" color="success">New Lesson</Button>
        </Link>
        <Link to="/all-lessons">
          <Button className="dash-button" color="primary">Previous Lessons</Button>
        </Link>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    loggedIn: true
  }
}

export default connect(mapStateToProps)(Dashboard)