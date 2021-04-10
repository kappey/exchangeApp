import React from 'react'

export default function CurrencyFieldComponent(props) {

    return (
        <div className="row mx-auto w-50">
             <input min="1" type="number" className="form-control w-75" value={props.amount} onInput={props.onChangeInput}/>
            <select className="form-control w-25" value={props.selectedCurrency} onChange={props.onChangeCurrency}>
                {props.currencyOptions.map(option => (
                    <option value={option} key={option}>{option.substring('USD'.length)}</option>
                 ) )}

               
            </select>
        </div>
    )
}
