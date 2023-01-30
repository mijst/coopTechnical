import { useEffect, useState } from 'react'
import {Timer} from './Timer'

interface currencyTypes {
amount: number,
currencyFrom: string,
currencyTo: string,
currencies: string[],
currenciesFull: string[],
onAmountChange(e: any): void,
onCurrencyChangeFrom(e: any): void,
onCurrencyChangeTo(e: any): void,
value: number,
resetTimer: boolean

}
export const Currency = (props: currencyTypes)=>{
    const [second, setSecond] = useState(0)
    const [millisecond, setMillisecond] = useState(0)
    const [showTime,setShowTime] = useState(true)
   
    useEffect(() => {
        if (props.resetTimer) {
            setSecond(9)
            setMillisecond(99)
        }
    },[props.value,props.resetTimer])
    useEffect(()=> {
        if(millisecond > 0) {
            setShowTime(true)
            setTimeout(()=> setMillisecond(millisecond-1),10)
        } else if (second > 0) {
            setMillisecond(99)
            setTimeout(()=> setSecond(second-1))
        } else {
            setShowTime(false)
        }
        
    },[millisecond,second,props.value])

    return (
        <div className="currencyConverter">
            <h1>Currency Converter</h1>
            <input type="text" value={props.amount} onChange={e => props.onAmountChange(e.target.value)}/>
                <select value={props.currencyFrom} onChange={e => props.onCurrencyChangeFrom(e.target.value)}>
                    {props.currencies.map((currency: any) => (
                        <option value = {currency} key={currency}>
                            {currency + ' ' + props.currenciesFull[currency]}
                        </option>
                    ))}
                </select>
                <select value={props.currencyTo} onChange={e => props.onCurrencyChangeTo(e.target.value)}>
                    {props.currencies.map((currency: any) => (
                        <option value = {currency} key={currency}>
                            {currency + ' ' + props.currenciesFull[currency]}
                        </option>
                        
                    ))}
                </select>
                <h2>
                {showTime ? isNaN(props.value) ? `${props.amount} is not a valid number.` : props.value+' '+props.currencyTo : null}
                </h2>
                {props.value > 0 && showTime && <Timer second={second} millisecond={millisecond}/>}


        </div>
    )
}