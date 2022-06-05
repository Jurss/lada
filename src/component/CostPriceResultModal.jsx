import React, { useContext, useRef, useState } from 'react'
import styles from './css/costPriceResultModal.module.css'
import Modal from 'react-modal';
import closeIcon from '../assets/img/closeIcon.svg'
import { userContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const SignUpModal = ({costPriceResult, formData}) => {

    const {modalState, toggleModals} = useContext(userContext)
    const navigate = useNavigate()

    const customStyles = {
        content: {
            width: '90vw',
            height: "90vh",
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
        }

  return (
    <>
        <Modal
            ariaHideApp={false}
            isOpen={modalState.costPriceResultModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
                <div id={styles.headerModal}>
                <h2 id={styles.headerTextModal}>Coût de revient</h2>
                <img id={styles.closeModal} src={closeIcon} alt="close modal" onClick={closeModal} />
                </div>
                <div className={styles.separator}></div>

                <p className={styles.resultText}>Le coût de revient pour <span> 1 {formData[3]}</span> est de <span>{costPriceResult[1]}€</span> </p>
                <p className={styles.resultText}>Le coût total pour fabriquer <span>{formData[5]} {formData[3]}</span> est de <span>{costPriceResult[0]}€</span> </p>
        </Modal>
    </>
  )
}

export default SignUpModal