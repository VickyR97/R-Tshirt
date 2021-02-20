import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Button
  } from 'reactstrap';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="sticky-top bg-dark">
        <Navbar color="dark" dark expand="md" className="container">
        <NavbarBrand href="/" className="font-weight-bold pl-md-4 py-2">T-Shop</NavbarBrand>
        <div className="ml-auto py-2">
            <Link to="/login" className="mr-md-5 mr-3 font-weight-bold text-white">Login</Link> 
            <Link to="/login" className="mr-md-5 mr-3 font-weight-bold text-white">Signup</Link> 
        </div>
        </Navbar>
        </div>
    )
}
