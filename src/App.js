import "./App.css";
import React from "react";
import PetDisplay from "./SlideShow/PetDisplay/PetDisplay";
import {Route, Routes} from "react-router-dom";
import UploadPage from "./UploaderAndViewer/Uploader/UploadPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewerPage from "./UploaderAndViewer/Viewer/ViewerPage";

export const DOWNEY = "DOWNEY";
export const AGOURA = "AGOURA";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/Agoura" element={<PetDisplay location={AGOURA}/>}/>
                <Route path="/Downey" element={<PetDisplay location={DOWNEY}/>}/>
                <Route path="/upload" element={<UploadPage/>}/>
                <Route path="/view" element={<ViewerPage/>}/>
                <Route path="/*" element={<PetDisplay location={AGOURA}/>}/>
            </Routes>
        </div>
    );
}

export default App;
