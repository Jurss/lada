import React from 'react'
import styles from './css/menu.module.css'
import recipeBook from '../assets/img/recipeBook.png'
import activeRecipeBook from '../assets/img/activeRecipeBook.png'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div id={styles.mainContainer}>
        <div className={styles.menuItem}>
            <img className={styles.menuImg} src={activeRecipeBook} alt="recipe book" />
            <Link to='/home/home/edit' className={styles.menuText}>Editer une fiche</Link>
        </div>
        <div className={styles.menuItem}>
            <img className={styles.menuImg} src={recipeBook} alt="recipe book" />
            <p className={styles.menuText}>Mes fiches recette</p>
        </div>
    </div>
  )
}

export default Menu