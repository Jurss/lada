import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../context/UserContext'

const Home = () => {
    const {currentUser} = useContext(userContext)
    const navigate = useNavigate()
    useEffect(() => {
        if(currentUser !== null){
            navigate('/home/home')
        }
    }, [])
  return (
    <div>

    </div>
  )
}

export default Home