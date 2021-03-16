import React, {useState, useEffect} from 'react'
import Routes from "./routes/index";
import fire from "./config/firebase";

export const isAuth = React.createContext()

export default function App() {
  const [auth, setAuth] = useState(false)

  useEffect(() => {
          fire.auth().onAuthStateChanged(user =>{
              if(user){
                  setAuth(true)
              }else{
                  setAuth(false)
              }
          })      
  }, [])

  return (
    <div>
      <isAuth.Provider value={auth}>
      <Routes
      authenticate = {auth}
      />
      </isAuth.Provider>
    </div>
  )
}
