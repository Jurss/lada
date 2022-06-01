import React, { useContext } from 'react'
import styles from './css/navBar.module.css'
import { Link } from 'react-router-dom'
import { userContext } from '../context/UserContext';

const NavBar = () => {
    const {toggleModals} = useContext(userContext)

  return (
    <div id={styles.mainContainer}>
        <Link to='/'><h1>L'ami des Artisants</h1></Link>
        <div id={styles.buttonContainer}>
            <button onClick={() => toggleModals("signUp")} className={styles.buttonSign}>Sign Up</button>
            <button onClick={() => toggleModals("signIn")} className={styles.buttonSign}>Sign Up</button>
            <Link to='/logOut' className={styles.buttonLogOut}>Log Out</Link>
        </div>
    </div>
  )
}

export default NavBar