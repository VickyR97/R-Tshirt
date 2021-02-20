import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from "../pages/homePage";
import login from "../pages/login"
import signup from "../pages/signup"
import error from "../pages/error";

export default function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" exact component={login}></Route>
                    <Route path="/" exact component={login}></Route>
                    <Route path="/signup" exact component={signup}></Route>
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/error" exact component={error}></Route>
                    <Redirect to='/error' />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
