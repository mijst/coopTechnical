interface currencyTypes {
amount: number,
currency: string,
currencies: string[],
onAmountChange(e: any): void,
onCurrencyChange(e: any): void


}
export const Currency = (props: currencyTypes)=>{
    return (
        <div>
            <input type="text" value={props.amount} onChange={e => props.onAmountChange(e.target.value)}/>
                <select value={props.currency} onChange={e => props.onCurrencyChange(e.target.value)}>
                    {props.currencies.map((currency: any) => (
                        <option value = {currency}>{currency}</option>
                    ))}
                </select>
        </div>
    )
}