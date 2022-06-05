export function getFormData(event) {
    let formArr = []
    for (let i = 0; i < event.target.length; i++) {
        formArr.push(event.target[i].name, event.target[i].value)
    }
    return formArr
}