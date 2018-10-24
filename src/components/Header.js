import React from 'react';
import {connect} from 'react-redux';

import {menuToggle, logout} from '../actions';

import {
  Button,
  ButtonDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import image from '../assets/logo.png';

import '../css/Header.css'

export function Header(props){

  let navi

  if(!props.loggedIn){
    navi = (
      <Nav>
        <NavItem>
          <NavLink href="/about">
            About
          </NavLink>
        </NavItem>
        <Button outline color="secondary">Log In</Button>
        </Nav>
    )
  }

  if(props.loggedIn){
    navi = (
      <Nav>
        <NavItem>
          <ButtonDropdown 
          isOpen={props.menuOpen} 
          toggle={() => props.dispatch(menuToggle())}
          direction="left"
          >
            <DropdownToggle caret>Menu</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <NavLink href="/articles">
                  Articles
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink  href="/articleform">
                  New Article
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink className="logout" onClick={()=>props.dispatch(logout())}>
                  Log Out
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </NavItem>
      </Nav>
    )
  }

  return(
    <div>
      <Navbar color='faded'>
        <NavbarBrand href="/"><img alt="logo" src={image}/></NavbarBrand>
          {navi}
      </Navbar>
    </div>

    // transition in the signup form
    // Photo by Easton Oliver on Unsplash
    );
}

const mapStateToProps = state => {
  return {
    menuOpen: state.menu.menuOpen,
    loggedIn: true,
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(Header);