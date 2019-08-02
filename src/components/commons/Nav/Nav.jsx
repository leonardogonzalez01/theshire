import React, { Component } from "react";
import {BrowserRouter, Link} from 'react-router-dom';
import {MDBNavbarBrand,MDBNav, MDBNavItem, MDBNavLink} from "mdbreact";

const Nav = () => {
    return (
        <BrowserRouter>
            <MDBNav color="blue-gradient" className="font-weight-bold py-4 px-2 mb-4" >
                <MDBNavbarBrand href="/"  className="white-text">
                    <img src="logo.png" height="50rem" width="100rem" className="align-center" alt="marvel" />
                </MDBNavbarBrand>
                <MDBNavItem>
                    <MDBNavLink className="white-text" to={'/'}><strong>Home</strong></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="white-text" to={'/admin'}><strong>Admin</strong></MDBNavLink>
                </MDBNavItem>
            </MDBNav>
        </BrowserRouter>
    );
};
export default Nav;