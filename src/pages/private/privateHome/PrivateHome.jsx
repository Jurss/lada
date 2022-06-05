import React from 'react'
import styles from '../../css/privateHome.module.css'
import Menu from '../../../component/Menu'
import EditRecipe from '../../../component/EditRecipe'
import { Routes,Route } from 'react-router-dom'

const PrivateHome = () => {
  return (
    <div id={styles.mainContainer}>
        <Menu />
        <Routes>
            <Route path='/edit' element={<EditRecipe />} />
        </Routes>
    </div>
  )
}

export default PrivateHome