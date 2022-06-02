import React, {useContext} from 'react'
import { userContext } from '../../context/UserContext'
import { Outlet, Navigate } from 'react-router-dom'


const Private = () => {
    const {currentUser} = useContext(userContext)

    if(!currentUser){
        return <Navigate to='/' />
    }
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Private