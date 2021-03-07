import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from "../AuthProvider/authProvider"

const ProtectedRoute = (props) => {
    const Component = props.component;
    const user = useContext(AuthContext);
    const isAuthenticated = user.userState
    
    return (
        <div>
            {isAuthenticated !== null ?
                <Component />
                :
                <Redirect to='/login' />
            }
        </div>
        
    )
}


export default ProtectedRoute;