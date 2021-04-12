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
        <div>
            <h2 className="d-flex justify-content-center pt-5">
                You will get<br/>
                {parseFloat(toFieldAmount).toFixed(2)} {selectedToCurrency.substring('USD'.length)} <br/>
                for<br/>
                {parseFloat(fromFieldAmount).toFixed(2)} {selectedFromCurrency.substring('USD'.length)}
            </h2>
            <div className="d-flex justify-content-center pt-5 text-warning">
                <DateComponent/>
            </div>
        </div>
    
    )
}
