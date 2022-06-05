import React,{ useState } from 'react'
import styles from './css/editRecipe.module.css'

const EditeRecipePrice = ({idx}) => {

    const [nbUnit, setnbUnit] = useState([])
    const [price, setPrice] = useState([])
    const [used, setUsed] = useState([])

    const handleNbUnit = (e) => {
        let input = e.target.value
        if(input.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)){
            setnbUnit(input)
        }
    }
    const handlePrice = (e) => {
        let input = e.target.value   
        if(input.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)){
            setPrice(input)
        }
    }
    const handleUsed = (e) => {
        let input = e.target.value
        if(input.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)){
            setUsed(input)
        }
    }

    const handleFloat = (e) => {
        // The conditional prevents parseFloat(null) = NaN (when the user deletes the input)
        switch(e){
            case "nbUnit":
                setnbUnit(parseFloat(nbUnit) || '')
                break;
            case "price":
                setPrice(parseFloat(price) || '')
                break;
            case "used":
                setUsed(parseFloat(used) || '')
                break;
        }
    }
  return (
      <>
        <div id={styles.costContainer}>
            <label className={styles.labelPriceInput} htmlFor={'nbUnit'+idx}>prix pour: </label>
            <input className={styles.priceInput} value={nbUnit} onChange={handleNbUnit} onBlur={() => handleFloat("nbUnit")} type="text" name={'nbUnit'+idx} id={'nbUnit'+idx} required/>
            <div className={styles.selectUnitContainer}>
                <select className={styles.selectUnit} name="unit" id="unit" >
                    <option value="kilo">Kilo</option>
                    <option value="litre">Litre</option>
                    <option value="unit">Unité</option>
                </select>
            </div>
            /
            <input className={styles.priceInput} type="text" name={'price'+idx} id={'price'+idx} value={price} onChange={handlePrice} onBlur={() => handleFloat("price")} required/>
            <p id={styles.euro}>€</p>
        </div>
            <div id={styles.costContainer}>
            <label className={styles.labelInput} htmlFor={'used'+idx}>utilisé: </label>
            <input className={styles.Usedinput} type="text" name={'used'+idx} id={'used'+idx} value={used} onChange={handleUsed} onBlur={() => handleFloat("used")} required/>
        </div>
    </>
  )
}

export default EditeRecipePrice