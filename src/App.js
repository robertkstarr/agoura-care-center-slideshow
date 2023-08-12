import "./App.css";
import React from "react";
import PetDisplay from "./PetDisplay/PetDisplay";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <PetDisplay/>
            <Footer/>
        </div>
    );
}

export default App;
