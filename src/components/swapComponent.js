import React from 'react'

export default function SwapComponent(props) {
    const{
        swapOptions
    } = props
    return (
        <div className="mx-auto w-50">
            <button className="btn btn-info" onClick={swapOptions}>SWAP</button>
        </div>
    )
}
