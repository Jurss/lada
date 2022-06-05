import React,{ useState } from 'react'
import styles from './css/editRecipe.module.css'

const EditeRecipePrice = ({idx}) => {
    const [number, setNumber] = useState([])

    const handleNumber = (e) => {
        let input = e.target.value
        if(input.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)){
            setNumber(input)
        }
    }
    const handleFloat = () => {
        // The conditional prevents parseFloat(null) = NaN (when the user deletes the input)
        setNumber(parseFloat(number) || '')
    }
  return (
      <>
        <div id={styles.costContainer}>
            <label className={styles.labelPriceInput} htmlFor={'nbUnit'+idx}>prix pour: </label>
            <input className={styles.priceInput} value={number} onChange={handleNumber} onBlur={handleFloat} type="text" name={'nbUnit'+idx} id={'nbUnit'+idx} />
            <div className={styles.selectUnitContainer}>
                <select className={styles.selectUnit} name="unit" id="unit" >
                    <option value="kilo">Kilo</option>
                    <option value="litre">Litre</option>
                    <option value="unit">Unité</option>
                </select>
            </div>
            /
            <input className={styles.priceInput} type="text" name={'price'+idx} id={'price'+idx} />
            <p id={styles.euro}>€</p>
        </div>
            <div id={styles.costContainer}>
            <label className={styles.labelInput} htmlFor={'used'+idx}>utilisé: </label>
            <input className={styles.Usedinput} type="text" name={'used'+idx} id={'used'+idx} />
        </div>
    </>
  )
}

export default EditeRecipePrice