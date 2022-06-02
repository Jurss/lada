import React, { useContext, useRef, useState } from 'react'
import styles from './css/signUpModal.module.css'
import Modal from 'react-modal';
import closeIcon from '../assets/img/closeIcon.svg'
import { userContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const SignUpModal = () => {

    const {modalState, toggleModals, signIn} = useContext(userContext)
    const [validation, setValidation] = useState()
    const navigate = useNavigate()

    const inputs = useRef([])
    const addInput = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }
    const formRef = useRef()

    const handleForm = async (e) => {
        e.preventDefault()
        try{
            const cred = await signIn(
                inputs.current[0].value,
                inputs.current[1].value
            )
            formRef.current.reset()
            setValidation("")
            navigate('/private/private-home')
            toggleModals("close")
        }catch{
            setValidation("Email et/ou mot de passe inccorect")
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
        isOpen={modalState.signInModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <div id={styles.headerModal}>
            <h2 id={styles.headerTextModal}>Sign In</h2>
            <img id={styles.closeModal} src={closeIcon} alt="close modal" onClick={closeModal} />
          </div>
            <div className={styles.separator}></div>
            <form onSubmit={handleForm} ref={formRef}>
                <div className={styles.inputContainer}>
                <label htmlFor="signInEmail" className="form-label">
                          Email adress
                        </label>
                        <input
                          ref={addInput}
                          name="email"
                          required
                          type="email"
                          className="form-control"
                          id="signInEmail"
                        />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="signInPwd">Mot de passe: </label>
                    <input
                        ref={addInput}
                        type="password"
                        name="pwd"
                        required
                        id="signInPwd"
                        />
                </div>
                <button type="submit">Sign In</button>
            </form>
            {validation}
      </Modal>
    </>
  )
}

export default SignUpModal