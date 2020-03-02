import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn
} from "mdbreact";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Photo1 from '../../photo/logo.jpg'
import { logOut } from '../../redux/actions/userAction'
import './NavbarCss.css'

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="green" dark expand="md">
        <MDBNavbarBrand>
            <img src={Photo1} style={{width: '100px' , borderRadius:'50%', height:'100px'}}/>
            <Link to='/'>
          <strong className="white-text titleNavbar"> Cherriby Shop</strong>
            </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            {
              !this.props.username
              ?
              <MDBNavItem>
                <MDBNavLink to='/auth'>LOG IN</MDBNavLink>
              </MDBNavItem>
              :
              null
            }
            {
              this.props.role == 1
              ?
            <MDBNavItem>
                <MDBNavLink to='/admin'>Input Barang</MDBNavLink>
              </MDBNavItem>
              :
              null
            }
           
               <MDBNavItem>
                <MDBNavLink to=''  className='btn btn-danger'> {this.props.username} </MDBNavLink>
                </MDBNavItem>
            {
              !this.props.username
              ?
              null
              :
              <MDBNavItem>
                <MDBNavLink to='/barang'>Barang</MDBNavLink>
              </MDBNavItem>
            }
              
              <MDBNavItem>
              {
              this.props.username
              ?
              <button onClick={this.props.logOut}>Log Out</button>
              :
              null
            }
              </MDBNavItem>

            
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    role : state.user.role
  }
}

export default connect(mapStateToProps, { logOut })(NavbarPage);