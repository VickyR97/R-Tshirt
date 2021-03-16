import React, {useEffect, useState} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from "../pages/homePage";
import login from "../pages/login"
import signup from "../pages/signup"
import error from "../pages/error";
import cart from "../pages/cart";
import productDetail from  "../pages/productDetails"
import ProtectedRoute from '../Components/ProtectedRoute';
import LoginRoute from '../Components/LoginRoute';


export default function Routes({authenticate = false}) {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <LoginRoute path="/login" exact component={login}></LoginRoute>
                    <LoginRoute path="/signup" exact component={signup}></LoginRoute>

                    <Route path="/" exact component={Home}></Route>
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/error" exact component={error}></Route>

                    <ProtectedRoute exact path="/cart" isAuthenticated={authenticate} component={cart} />

                    <Route path="/product/:id" exact component={productDetail}></Route>
                    <Redirect to='/error' />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
