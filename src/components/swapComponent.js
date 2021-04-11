import React from 'react'
import '../css/swapComponent.css'

export default function SwapComponent(props) {
    const{
        swapOptions
    } = props
    return (
        <div className="d-flex justify-content-center w-75">
            <button className="btn w-75" 
            style={{
                boxShadow: "none",
                border: "none"
            }} 
            onClick={swapOptions}><img src="arrow-btn-64.png" alt="two-rotate-arrows" className="spiningArrows"/></button>
        </div>
    )
}
