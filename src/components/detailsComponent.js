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
            <h4 className="d-flex md-h4 justify-content-center text-center pt-5 text-muted" style={{fontSize: "3em"}}>
                {parseFloat(fromFieldAmount).toFixed(2)} {selectedFromCurrency.substring('USD'.length)}{'\u00A0'}{'\u00A0'}
                <img src="arrow-32.png" alt="arrows"/>{'\u00A0'}{'\u00A0'}
                {parseFloat(toFieldAmount).toFixed(2)} {selectedToCurrency.substring('USD'.length)}
            </h4>
            <div className="d-flex justify-content-center pt-5 text-muted">
                <DateComponent/>
            </div>
        </div>
    
    )
}
