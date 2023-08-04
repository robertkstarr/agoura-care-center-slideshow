import './App.css';
import {getAnimalImageURL} from "./getAnimalImageURL/getAnimalImageURL";

function App() {
    const animalImageURL = getAnimalImageURL();
    return (
        <div className="App">
            <header className="App-header">
                <img src={animalImageURL} className="App-logo" alt="Pet"/>
            </header>
        </div>
    );
}

export default App;
