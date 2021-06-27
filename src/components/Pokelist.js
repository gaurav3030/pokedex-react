import React, { useEffect , useState } from 'react'
import Axios from 'axios';
import Pokeoption from './Pokeoption';

export default function Pokelist(props) {
    const [pokemonlist , setPokemonlist] = useState();

    useEffect(() => {
        const getPokelist = async () => {
            var pokelist =[];
            for(let i = 1 ; i<=40;i++){
                
                const pokelistRes = await Axios.get(
                    "https://pokeapi.co/api/v2/pokemon/"+i+"/"
                );
                if(pokelistRes.data.id){

                    pokelist.push({
                        id:pokelistRes.data.id,
                        name:pokelistRes.data.name,
                        sprite:pokelistRes.data.sprites.front_default
                    });
                }
            }
            setPokemonlist(pokelist);
            
        }
        
        getPokelist();


            

        
    })


    return (
        <div className="pokelist">
            <div className="transparentoption"></div>
            <div className="transparentoption"></div>
            <div className="transparentoption"></div>
            <div className="transparentoption"></div>
            <div className="transparentoption"></div>
            {pokemonlist && pokemonlist.map((pokemon) =>

                <Pokeoption key={pokemon.id} id={pokemon.id} pokemon={pokemon} activePokemon={props.activePokemon} setActivePokemon={props.setActivePokemon} setPokedex={props.setPokedex}/>
                
            )}
            <div className="transparentoption"></div>
            <div className="transparentoption"></div>
            <div className="transparentoption"></div>
            <div className="transparentoption"></div>
            <div className="transparentoption"></div>
            
        </div>
        
    )
}
