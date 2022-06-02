import React, {useContext} from 'react'
import { userContext } from '../context/UserContext'

const Home = () => {
    const {currentUser} = useContext(userContext)
  return (
    <div>
    </div>
  )
}

export default Home