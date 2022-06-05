import React, { useState } from 'react'
import styles from './css/editRecipe.module.css'
import {costPrice} from '../logic/calcul'
import EditeRecipePrice from './EditeRecipePrice'

const EditRecipe = () => {
    const [addItem, setAddItem] = useState([{id: 0}])
    const [costPriceResult, setCostPriceResult] = useState()

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
 
    function handleAddItem(){
        const value = [...addItem]
        const id = getRandomInt(10000)
        value.push({id: id})
        setAddItem(value)
    }
    const removeItem = (index) => {
        const value = [...addItem]
        value.splice(index, 1)
        setAddItem(value)
    };
    function formSubmit(e){
        e.preventDefault()
        const result = costPrice(e)
        setCostPriceResult(result)
    }
  return (

    <div id={styles.mainContainer}>
        <div id={styles.headerContainer}>
            <h1 id={styles.headerTitle}>Editer une fiche</h1>
            <div className={styles.separator}></div>
        </div>

        <div id={styles.contentContainer}>
            <form onSubmit={formSubmit} id={styles.formContainer}>
                <div id={styles.categoryContainer}>
                    <label className={styles.labelInput} htmlFor="category">Catégorie: </label>
                    <div className={styles.selectInputContainer}>
                        <select className={styles.selectInput} name="category" id="category" >
                            <option value="">--Optionnel--</option>
                            <option value="patisserie">Patisserie</option>
                            <option value="fleur">Fleur</option>
                        </select>
                    </div>
                </div>

                <div id={styles.titleContainer}>
                    <label className={styles.labelInput} htmlFor="title">Titre de la fiche: </label>
                    <input className={styles.input} type="text" id='title' name='title' />
                </div>
                <div id={styles.quantityContainer}>
                    <label className={styles.labelInput} htmlFor="quantity">Quantité</label>
                    <input className={styles.input} type="text" name="quantity" id="quantity" />
                    <div className={styles.selectInputContainer}>
                        <select className={styles.selectInput} name="quantityValue" id="quantityValue" >
                            <option value="part">part</option>
                            <option value="kilo">Kilo</option>
                        </select>
                    </div>
                </div>
                <div id={styles.itemContainer}>
                    {addItem.map((item, idx) => {
                        return(
                            <div id={styles.itemDivContainer} key={addItem[idx].id}>
                                <div id={styles.itemName}>
                                    <label className={styles.labelInput} htmlFor={'item'+idx}>Elément</label>
                                    <input className={styles.input} type="text" name={'item'+idx} id={'item'+idx}/>
                                </div>
                                <EditeRecipePrice idx={idx} />
                                {addItem.length > 1 &&
                                    <button id={styles.removeBtn} type='button' onClick={() => removeItem(idx)}>Retiré</button>
                                }
                            </div>
                        )
                    })}
                    <div id={styles.addbtnContainer}>
                        <button id={styles.addBtn} type='button' onClick={() => handleAddItem()}>Ajouter un nouvel élément</button>
                    </div>
                </div>
                <div id={styles.calculBtnContainer}>
                <button id={styles.calcBtn} type='submit'>Calculer</button>
                </div>
            </form>
            {costPriceResult !== undefined &&
                <p>Result: {costPriceResult}</p>
            }
        </div>
    </div>
  )
}

export default EditRecipe