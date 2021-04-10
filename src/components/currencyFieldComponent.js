import React from 'react'

export default function CurrencyFieldComponent(props) {

    const{
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeInput
    } = props

    return (
        <div className="row mx-auto w-50">
             <input min="1" type="number" className="form-control w-75" value={amount} onInput={onChangeInput}/>
            <select className="form-control w-25" value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option value={option} key={option}>{option.substring('USD'.length)}</option>
                 ) )}
            </select>
        </div>
    )
}
