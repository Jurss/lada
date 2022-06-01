import React, { useContext, useRef, useState } from 'react'
import styles from './css/signUpModal.module.css'
import Modal from 'react-modal';
import closeIcon from '../assets/img/closeIcon.svg'
import { userContext } from '../context/UserContext';
import { validateElement } from 'react-modal/lib/helpers/ariaAppHider';

const SignUpModal = () => {

    const {modalState, toggleModals, signUp} = useContext(userContext)
    const [validation, setValidation] = useState()

    const inputs = useRef([])
    const addInput = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }
    const formRef = useRef()

    const handleForm = async (e) => {
        e.preventDefault()
        if((inputs.current[1].value.length || inputs.current[2].value.length) < 8){
            setValidation(" 6 caracteres minimum")
        }        
        else if(inputs.current[1].value !== inputs.current[2].value){
            setValidation("Les mot de passe ne corresponde pas")
        }

        try{
            const cred = await signUp(
                inputs.current[0].value,
                inputs.current[1].value
            )
            formRef.current.reset()
            setValidation("")
        }catch(err){
            if(err.code === "auth/invalid-email"){
                setValidation("Format de l'email invalide")
            }
            if(err.code === "auth/email-already-in-use"){
                setValidation("Email déja utilisé")
            }
        }
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '6px',
        },
      };
        function closeModal() {
            toggleModals("close")
            setValidation("")
        }

  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={modalState.signUpModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <div id={styles.headerModal}>
            <h2 id={styles.headerTextModal}>Sign Up</h2>
            <img id={styles.closeModal} src={closeIcon} alt="close modal" onClick={closeModal} />
          </div>
            <div className={styles.separator}></div>
            <form onSubmit={handleForm} ref={formRef}>
                <div className={styles.inputContainer}>
                <label htmlFor="signUpEmail" className="form-label">
                          Email adress
                        </label>
                        <input
                          ref={addInput}
                          name="email"
                          required
                          type="email"
                          className="form-control"
                          id="signUpEmail"
                        />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="signUpPwd">Mot de passe: </label>
                    <input
                        ref={addInput}
                        type="password"
                        name="pwd"
                        required
                        id="signUpPws"
                        />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="signUpRepeatPwd">Ressaisissez le mot de passe: </label>
                    <input
                        ref={addInput}
                        type="password"
                        name="repeatPwd"
                        required
                        id="signUpRepeatPwd"
                        />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            {validation}
      </Modal>
    </>
  )
}

export default SignUpModal