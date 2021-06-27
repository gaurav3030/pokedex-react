import React,{useEffect} from 'react'

export default function Pokeoption(props) {
    var classname = "pokeoption";
    if(props.id===props.activePokemon){
        classname =classname+" activepokemon";
    }
    function changeactivepokemon(e){

        props.setActivePokemon(props.id);
        props.setPokedex(1);
        
    }
    useEffect(() => {
        document.querySelectorAll('.activepokemon')[0].scrollIntoView({behavior: "smooth",block: "center",});

    },[props.activePokemon])



    return (
        <div className={classname} onClick = {changeactivepokemon}>
            <div className="pokesprite" style={{ backgroundImage: 'url('+props.pokemon.sprite+')' }}></div>
            <div className="pokename"> {props.pokemon.name}   </div>
        </div>
    )
}
