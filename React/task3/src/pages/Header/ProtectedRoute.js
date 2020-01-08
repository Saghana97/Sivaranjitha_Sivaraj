import React from'react'
import {Route,Redirect} from 'react-router-dom'
import auth from './auth'
const ProtectedRoute=({component: Comp,path, ...rest})=>{
    return(
    <Route {...rest} path={path} render={(props) => (
        auth.isAuthenticated() === true
          ? <Comp {...props} />
          : <Redirect to='/' />
      )} />
    )
}
export default ProtectedRoute