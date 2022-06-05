import { useState } from 'react'

export function useIsNumber(value){
    const [number, setNumber] = useState([])
    setNumber(value)
    return number
}