import './App.css';
import body from './misc/body.svg';
import PokeScreen from './components/PokeScreen';

function App() {
  return (
    <div className="pokedex">
        <div class="upperdex">
            <img src={body} alt=""></img>
                
            <div class="circle1"></div>
            <div class="circle2"></div>
        </div>

        <PokeScreen />

        <div class="lowerdex">
            <img src={body} alt=""/>

            <div class="circle1 bot"></div>
            <div class="circle2 bot"></div>
        </div>
    </div>
  );
}

export default App;
