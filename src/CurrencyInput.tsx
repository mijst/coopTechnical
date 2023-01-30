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
                {isNaN(props.value) ? `${props.amount} is not a valid number.` : props.value }
                   {props.value > 0 && <Timer reset={props.resetTimer} />}
                </h2>


        </div>
    )
}