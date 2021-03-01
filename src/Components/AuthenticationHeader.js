import React,{useState, useEffect} from 'react'
import {
    Navbar,
    NavbarBrand,
    Button
  } from 'reactstrap';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import fire from "../config/firebase";

import {useDispatch} from 'react-redux'
import { logout } from "../store/actions/index";


export default function Header({
    brand="Brand"
}) {
    const cart = <svg className="mr-2 mb-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>

    const cartList = useSelector(state => state.cartList)
    const cartCount = useSelector(state => state.cartCount)
    const [user, setUser] = useState({})
    const dispatch = useDispatch()


    useEffect(() => {
        fire.auth().onAuthStateChanged(users =>{
            if(users){
                setUser({...user, email: users.email})
            }
        })
    }, [])
    const logout = async () =>{
        await fire.auth().signOut()
            .then(response =>{
                setUser({})
                // dispatch(logout())
                // console.log("Logged Out Suucessfully...")
            })
            .catch(err =>{
                console.log("Logout Error", err)
            })
    }


    return (
        <div className="sticky-top bg-dark">
        <Navbar color="dark" dark expand="md" className="container">
        <NavbarBrand href="/" className="font-weight-bold pl-md-4 py-2">{brand}</NavbarBrand>
        <div className="ml-auto py-2 d-flex">
            <Link to={user.email ? "/cart" : "/cart" } className="mr-md-5 mr-3 font-weight-bold text-white text-decoration-none">{cart} cart ({cartList.length})</Link> 
            { user.email ? 
                (
                <div>
                    <Link to="/home" className="mr-md-5 mr-3 font-weight-bold text-white text-decoration-none" onClick={logout}>Logout</Link> 
                </div>
                ) : (
                    <div>
                        <Link to="/login" className="mr-md-5 mr-3 font-weight-bold text-white text-decoration-none">Login</Link> 
                        <Link to="/signup" className="mr-md-5 mr-3 font-weight-bold text-white text-decoration-none">Signup</Link>
                    </div>
                    )}
        </div>
        </Navbar>
        </div>
    )
}
