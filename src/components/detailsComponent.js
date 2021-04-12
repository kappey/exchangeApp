import React from 'react'
import DateComponent from './dateComponent'

export default function DetailsComponent(props) {

    const{
        selectedFromCurrency,
        selectedToCurrency,
        fromFieldAmount,
        toFieldAmount
    } = props;
    
    return (
        <div className="mt-5">
            <h2 style={{fontSize: "3em"}} className="d-flex justify-content-center text-center pt-5 text-warning">
                {parseFloat(fromFieldAmount).toFixed(2)} {selectedFromCurrency.substring('USD'.length)}{'\u00A0'}{'\u00A0'}
                <img src="arrow-64.png" alt="arrows"/>{'\u00A0'}{'\u00A0'}
                {parseFloat(toFieldAmount).toFixed(2)} {selectedToCurrency.substring('USD'.length)}
            </h2>
            <div className="d-flex justify-content-center pt-5 text-warning">
                <DateComponent/>
            </div>
        </div>
    
    )
}
