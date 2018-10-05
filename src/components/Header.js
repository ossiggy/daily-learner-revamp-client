import React, {Component} from 'react';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import image from '../assets/logo.png';

import '../css/Header.css'

export default class Header extends Component{

  render(){
    return(
    <div>
      <Navbar color='faded'>
        <NavbarBrand href="/"><img alt="logo" src={image}/></NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href="">Ideas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
                Log In
              </NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>

    // transition in the signup form
    // Photo by Easton Oliver on Unsplash
    );
  }
}