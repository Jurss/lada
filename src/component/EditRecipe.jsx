import React, { useState, useContext } from 'react'
import styles from './css/editRecipe.module.css'
import {costPrice} from '../logic/calcul'
import {getFormData} from '../logic/getFormData'
import EditeRecipePrice from './EditeRecipePrice'
import CostPriceResultModal from './CostPriceResultModal'
import { userContext } from '../context/UserContext';


const EditRecipe = () => {
    const {toggleModals} = useContext(userContext)

    const [addItem, setAddItem] = useState([{id: 0}])
    const [costPriceResult, setCostPriceResult] = useState()
    const [formData, setFormData] = useState()

    const [quantity, setQuantity] = useState([])

    const handleQuantity = (e) => {
        let input = e.target.value
        if(input.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)){
            setQuantity(input)
        }
    }

    const handleFloat = () => {
        // The conditional prevents parseFloat(null) = NaN (when the user deletes the input)
        setQuantity(parseFloat(quantity) || '')
    }

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
        const formDataResult = getFormData(e)
        setFormData(formDataResult)
        console.log(formData);
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
                    <label className={styles.labelInput} htmlFor="category">Cat??gorie: </label>
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
                    <input className={styles.input} type="text" id='title' name='title' required />
                </div>
                <div id={styles.quantityContainer}>
                    <label className={styles.labelInput} htmlFor="quantity">Quantit??</label>
                    <input className={styles.input} type="text" name="quantity" id="quantity" value={quantity} onChange={handleQuantity} onBlur={handleFloat} required/>
                    <div className={styles.selectInputContainer}>
                        <select className={styles.selectInput} name="quantityValue" id="quantityValue" >
                            <option value="part">Part</option>
                            <option value="kilo">Kilo</option>
                            <option value="unit??">Unit??</option>
                            <option value="litre">Litre</option>
                        </select>
                    </div>
                </div>
                <div id={styles.itemContainer}>
                    {addItem.map((item, idx) => {
                        return(
                            <div id={styles.itemDivContainer} key={addItem[idx].id}>
                                <div id={styles.itemName}>
                                    <label className={styles.labelInput} htmlFor={'item'+idx}>El??ment</label>
                                    <input className={styles.input} type="text" name={'item'+idx} id={'item'+idx} required/>
                                </div>
                                <EditeRecipePrice idx={idx} />
                                {addItem.length > 1 &&
                                    <button id={styles.removeBtn} type='button' onClick={() => removeItem(idx)}>Retir??</button>
                                }
                            </div>
                        )
                    })}
                    <div id={styles.addbtnContainer}>
                        <button id={styles.addBtn} type='button' onClick={() => handleAddItem()}>Ajouter un nouvel ??l??ment</button>
                    </div>
                </div>
                <div id={styles.calculBtnContainer}>
                <button id={styles.calcBtn} type='submit' onClick={() => toggleModals("costPriceResult")}>Calculer</button>
                </div>
            </form>
            <CostPriceResultModal costPriceResult={costPriceResult} formData={formData} />
        </div>
    </div>
  )
}

export default EditRecipe