import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Button } from 'reactstrap';
import Navlogo from "./Assets/GuidrLogo.png";

  

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
     
        <Navbar className="main-color sticky-top" expand="md">
        
          <NavbarBrand className="nav-color" href="/">GUIDR</NavbarBrand>
          <img src = {Navlogo} className="Nav-img" alt=""/>
          <NavbarToggler className="toggler" onClick={this.toggle} />
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="dropdown" nav caret>
                
                  ADVENTURE BEGINS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="DropdownMenu">
                    Book an adventure
                  </DropdownItem>

                  <DropdownItem divider />
                  <DropdownItem className="DropdownMenu">
                    Host a trip
                  </DropdownItem>

                  <DropdownItem divider />
                  <DropdownItem className="DropdownMenu">
                    Explore the world
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
              <a href="https://guidr2.netlify.com/"><Button className="login" >Login</Button></a>
              </NavItem>
              <NavItem>
              <a href="https://guidr2.netlify.com/register"><Button className="signup" color="primary">Sign Up</Button></a>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>

    );
  }
}

