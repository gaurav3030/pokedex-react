import React from 'react'

export default function PokeScreen(props) {


    let screenOffStyle = {
        height: "40vh"
    }
    let screenOnStyle = {
        height: "90vh"
    }
    let pokeinfoOffStyle = {
        display: "none"
    }
    let pokeinfoOnStyle = {
        display: "flex"
    }

    return (
        
        <div className="screen" style={props.pokedex===0?screenOffStyle:screenOnStyle} onClick = {props.toggleDex}>

            <div className="pokecontent" style={props.pokedex===0?pokeinfoOffStyle:pokeinfoOnStyle}>
                <div className="topcontent">
                    <div className="pokephoto">
                        {/* <img src="https://pokeres.bastionbot.org/images/pokemon/658.png" alt=""/> */}
                        <img src={props.activePokemoninfo && props.activePokemoninfo.sprites.front_default} alt=""/>
                    </div>    
                    <div className="pokedetails">
                        <div className="pokerow">
                            <span className="no">No.{props.activePokemoninfo && props.activePokemoninfo.id}</span>
                            <span className="name">{props.activePokemoninfo && props.activePokemoninfo.name}</span>
                        </div>
                        <div className="pokerow">
                            <span className="altname">Ninja Pokemon</span>
                            
                        </div>
                        <div className="pokerow">
                            <span className="type">TYPE</span>
                            {props.activePokemoninfo && props.activePokemoninfo.types[0]?<div className={"type1 "+props.activePokemoninfo.types[0].type.name}>{props.activePokemoninfo.types[0].type.name}</div>:null}
                            
                            {props.activePokemoninfo && props.activePokemoninfo.types[1]?<div className={"type2 "+props.activePokemoninfo.types[1].type.name}>{props.activePokemoninfo.types[1].type.name}</div>:null}
                            
                        </div>
                        <div className="pokerow">
                            <span className="entity">HEIGHT</span>
                            <span className="val">{props.activePokemoninfo && (props.activePokemoninfo.height/10)} m</span>
                        </div>
                        <div className="pokerow">
                            <span className="entity">WEIGHT</span>
                            <span className="val">{props.activePokemoninfo && props.activePokemoninfo.weight/10} kg</span>
                        </div>
                    </div>
        
                </div>
                <div className="pokeinfo">
                    <p>It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.</p>
                    <div className="infoleft">

                    </div>
                    <div className="inforight">

                    </div>
                </div>
            </div>

        </div> 
        
    )
}
