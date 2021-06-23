import React from 'react'

export default function PokeScreen(props) {

    let screenOffStyle = {
        height: "40vh"
    }
    let screenOnStyle = {
        height: "90vh"
    }

    return (
        
        <div className="screen" style={props.pokedex===0?screenOffStyle:screenOnStyle} onClick = {props.toggleDex}>



        </div> 
        
    )
}
