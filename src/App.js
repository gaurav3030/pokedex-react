import './App.css';
import {useState , useEffect} from 'react';

import body from './misc/body.svg';
import PokeScreen from './components/PokeScreen';
import './misc/pokelist.css';
import './misc/poketype.css';
import Pokelist from './components/Pokelist';
import Axios from 'axios';

function App() {

    const [pokedex, setPokedex] = useState(0);
    const [activePokemon , setActivePokemon] = useState(1);
    const [activePokemoninfo , setActivePokemoninfo] = useState();
    useEffect(() => {
        const getPokemon = async () => {

            const pokelistRes = await Axios.get(
                "https://pokeapi.co/api/v2/pokemon/"+activePokemon+"/"
            );
            if(pokelistRes.data.id){
                setActivePokemoninfo(pokelistRes.data);

            }

            

            
            

        }
        
        getPokemon();
        


            

        
    },[activePokemon,activePokemoninfo]);



    function toggleDex(){
  
        if(pokedex ===0){
            setPokedex(1);

        }else{
            setPokedex(0);

        }
    }
    let pokedexOffStyle = {
        height: "64vh",
        transform: "scale(1)"
    }
    let pokedexOnStyle = {
        height: "90vh",
        transform: "scale(2)"
    }
  return (
    <>

        <div className="bgimg"></div>
        <Pokelist activePokemon={activePokemon} setActivePokemon={setActivePokemon} setPokedex={setPokedex}/>

        <div className='pokedex'  style = {pokedex===0?pokedexOffStyle:pokedexOnStyle}>
            <div className="upperdex" >
                <img src={body} alt=""></img>
                    
                <div className="circle1"></div>
                <div className="circle2"></div>
            </div>

            <PokeScreen toggleDex={toggleDex} pokedex={pokedex} activePokemoninfo={activePokemoninfo}/>

            <div className="lowerdex">
                <img src={body} alt=""/>

                <div className="circle1 bot"></div>
                <div className="circle2 bot"></div>
            </div>
        </div>
    </>
  );
}

export default App;
