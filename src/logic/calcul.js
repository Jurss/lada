export function costPrice(event) {
    const priceElement = []
    const result = []

    for (let i = 0; i < event.target.length; i++) {
        let slice
        if (i <= 59) {
            slice = -1
        } else { slice = -2 }
        const currentTarget = event.target[i].name
        if (currentTarget.slice(0, slice) === "nbUnit") {
            const nbUnit = event.target[i].value
            const priceForNbUnit = event.target[i + 2].value
            const usedUnit = event.target[i + 3].value
            const ratio = (priceForNbUnit / nbUnit) * usedUnit;
            const result = Math.round(ratio * 100) / 100;
            priceElement.push(result)
        }
    }
    const totalPrice = priceElement.reduce((partialSum, a) => partialSum + a, 0)
    const priceForOne = priceElement.reduce((partialSum, a) => partialSum + a, 0) / event.target.quantity.value
    result.push(totalPrice, priceForOne)
    return result
}