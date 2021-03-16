import React from 'react'
import { Route, Redirect } from "react-router-dom";
import AuthenticationLayout from "../layouts/authenticationLayout";

function LoginRoute({component : Component, ...rest}) {
    return (
        <Route {...rest} 
        render={(props) =>{
            return <AuthenticationLayout>
                <Component props />
            </AuthenticationLayout>
        }} />
    )
}

export default LoginRoute
