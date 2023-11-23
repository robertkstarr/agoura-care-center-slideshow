import "./App.css";
import React from "react";
import PetDisplay from "./SlideShow/PetDisplay/PetDisplay";
import {Route, Routes} from "react-router-dom";
import UploadPage from "./Uploader/UploadPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewerPage from "./Viewer/ViewerPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/*" element={<PetDisplay/>}/>
                <Route path="/upload" element={<UploadPage/>}/>
                <Route path="/view" element={<ViewerPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
