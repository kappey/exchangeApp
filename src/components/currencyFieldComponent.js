import React from 'react'

export default function CurrencyFieldComponent(props) {

    const{
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeInput,
        onFocusField
    } = props;

    const myStyle ={
        boxShadow: "none",
        border: "1px solid 	#dcdcdc"
    }

    return (
        <div className="d-flex justify-content-center">
            <input style={myStyle} min="1" type="number" className="form-control" value={Number(amount).toPrecision()} onFocus={onFocusField} onInput={onChangeInput}/>
            <select className="btn btn-outline-warning dropdown-toggle" value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option value={option} key={option}>{option.substring('USD'.length)}</option>
                 ) )}
            </select>
        </div>
    )
}
