import React from 'react'

export default function HeaderComponent() {

    return (
        <header style={{minHeight: 150}}>
            <h1 
            style={{
                color:"#aaaaaa", 
                textAlign: "center", 
                padding: "20px 0",
                fontFamily: "'Amatic SC', cursive", 
                fontSize: "8em"
            }}
            >EX<a style={{color:"#f0ad4e"}}>CHANGE </a> CURRENCY</h1>
        </header>
    )
}
