import React, {useState ,useEffect} from 'react'
import { Route, Redirect } from "react-router-dom";
import fire from "../config/firebase";
// import {useSelector} from 'react-redux'



const ProtectedRoute = ({component : Component, ...rest}) => {
    const [user, setUser] = useState({})
    // const isAuthenticated = useSelector(state => state.isAuthenticated)
    useEffect(() => {
        
        return(()=>{
            fire.auth().onAuthStateChanged(users =>{
                if(users){
                    setUser({email: users.email})
                }else{
                    setUser(null)
                }
            })
        })
    }, [])

return(
    <Route
        {...rest} 
        render={(props)=>{
            if(user.email){
               return  <Component {...props} />
            }else{
                return <Redirect to='/login' />
            }
        }}/>
)
}

export default ProtectedRoute
