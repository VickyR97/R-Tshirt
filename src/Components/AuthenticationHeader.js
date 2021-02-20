import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Button
  } from 'reactstrap';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="sticky-top">
        <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" className="font-weight-bold py-2">ReactDoc</NavbarBrand>
        <div className="ml-auto py-2">
            <Link to="/login"><Button color="secondary mr-3 font-weight-bold">Login</Button></Link> 
            <Link to="/login"><Button color="secondary mr-3 font-weight-bold">Signup</Button></Link> 
        </div>
        </Navbar>
        </div>
    )
}
