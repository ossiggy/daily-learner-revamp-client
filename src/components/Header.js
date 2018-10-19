import React, {Component} from 'react';

import {
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import image from '../assets/logo.png';

import '../css/Header.css'

export default class Header extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
    <div>
      <Navbar color='faded'>
        <NavbarBrand href="/"><img alt="logo" src={image}/></NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href="/about">
                About
              </NavLink>
            </NavItem>
            <Button outline color="secondary">Log In</Button>
          </Nav>
      </Navbar>
    </div>

    // transition in the signup form
    // Photo by Easton Oliver on Unsplash
    );
  }
}