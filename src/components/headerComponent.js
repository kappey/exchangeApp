import React from 'react'

export default function HeaderComponent() {

    return (
        <header>
            <h1 
            style={{
                color:"#aaaaaa", 
                textAlign: "center", 
                padding: "20px 0",
                fontFamily: "'Amatic SC', cursive", 
                fontSize: "8em"
            }}
            >EX<a className="text-warning">CHANGE </a> CURRENCY</h1>
        </header>
    )
}
