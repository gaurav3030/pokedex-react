import './App.css';
import {useState} from 'react'
import body from './misc/body.svg';
import PokeScreen from './components/PokeScreen';


function App() {

    const [pokedex, setPokedex] = useState(0)
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
    <div className='pokedex'  style = {pokedex===0?pokedexOffStyle:pokedexOnStyle}>
        <div className="upperdex" >
            <img src={body} alt=""></img>
                
            <div className="circle1"></div>
            <div className="circle2"></div>
        </div>

        <PokeScreen toggleDex={toggleDex} pokedex={pokedex}/>

        <div className="lowerdex">
            <img src={body} alt=""/>

            <div className="circle1 bot"></div>
            <div className="circle2 bot"></div>
        </div>
    </div>
  );
}

export default App;
