import React, { useContext } from 'react'
import styles from './css/navBar.module.css'
import { userContext } from '../context/UserContext';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';

const NavBar = () => {
    const {toggleModals, currentUser} = useContext(userContext)
    console.log(currentUser);
    const navigate = useNavigate()
    
    const logOut = async () => {
        try{
            await signOut(auth)
            navigate('/')
        }catch{
            alert('Deconnexion Impossible, verifier votre connexion internet !')
        }
    }

  return (
    <div id={styles.mainContainer}>
        <h1 id={styles.headerTitle}>L'ami des Artisants</h1>
        <div id={styles.buttonContainer}>
            {currentUser === null &&
                <>
                    <button onClick={() => toggleModals("signUp")} className={styles.buttonSign}>S'enregistrer</button>
                    <button onClick={() => toggleModals("signIn")} className={styles.buttonSign}>Connexion</button>
                </>
            }
            {currentUser !== null &&
                <button onClick={logOut} className={styles.buttonLogOut}>Déconnexion</button>
            }
        </div>
    </div>
  )
}

export default NavBar