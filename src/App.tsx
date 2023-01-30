import React, {useState, useEffect} from 'react';
import './App.css';
import { Currency } from './CurrencyInput';


export const App = () => {
  const [amountInput, setAmountInput] = useState<number>(1)
  const [amountOutput, setAmountOutput] = useState<number>(1)
  const [currencyInput, setCurrencyInput] = useState<any>('GBP')
  const [currencyOutput, setCurrencyOutput] = useState<any>('EUR')
  const [data, setData] = useState([])
  const [dataFullDescription, setdataFullDescription] = useState([])
  const [resetTimer,setResetTimer] = useState(false)



  useEffect(()=> {
    fetch('https://open.er-api.com/v6/latest/GBP')
      .then(res => res.json())
      .then(data => setData(data.rates))
  },[])

  useEffect(()=> {
    fetch('https://openexchangerates.org/api/currencies.json')
      .then(res => res.json())
      .then(data => setdataFullDescription(data))
  },[])

  useEffect(() => {
    if (!!data) {
      handleAmountInputChange(1)
    }
  },[data])

  const format = (number: any) => {
    return number.toFixed(2)
  }

  const handleAmountInputChange = (amountInput : any) =>{
    setAmountOutput(format(amountInput * data[currencyOutput] / data[currencyInput]))
    setAmountInput(amountInput)
    setResetTimer(true)
  }
  const handleCurrencyInputChange = (currencyInput : any) =>{
    setAmountOutput(format(amountInput * data[currencyOutput] / data[currencyInput]))
    setCurrencyInput(currencyInput)
    setResetTimer(true)
  }
  const handleCurrencyOutputChange = (currencyOutput : any) =>{
    setAmountOutput(format(amountInput * data[currencyOutput] / data[currencyInput]))
    setCurrencyOutput(currencyOutput)
    setResetTimer(true)
  }
  return <Currency 
      onAmountChange={handleAmountInputChange}
      onCurrencyChangeFrom={handleCurrencyInputChange}
      onCurrencyChangeTo={handleCurrencyOutputChange}
      currencies={Object.keys(data)}
      currenciesFull={dataFullDescription} 
      amount={amountInput} 
      currencyFrom={currencyInput}
      currencyTo={currencyOutput}
      value={amountOutput}
      resetTimer={resetTimer}
      />
}
