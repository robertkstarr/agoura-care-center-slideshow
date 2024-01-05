import "./App.css";
import React from "react";
import PetDisplay from "./SlideShow/PetDisplay/PetDisplay";
import {Route, Routes} from "react-router-dom";
import UploadPage from "./UploaderAndViewer/Uploader/UploadPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewerPage from "./UploaderAndViewer/Viewer/ViewerPage";

export const AGOURA = "AGOURA";
export const BALDWIN = "BALDWIN";
export const CARSON = "CARSON";
export const CASTAIC = "CASTAIC";
export const DOWNEY = "DOWNEY";
export const LANCASTER = "LANCASTER";
export const PALMDALE = "PALMDALE";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/Agoura" element={<PetDisplay location={AGOURA}/>}/>
                <Route path="/Baldwin" element={<PetDisplay location={BALDWIN}/>}/>
                <Route path="/Carson" element={<PetDisplay location={CARSON}/>}/>
                <Route path="/Castaic" element={<PetDisplay location={CASTAIC}/>}/>
                <Route path="/Downey" element={<PetDisplay location={DOWNEY}/>}/>
                <Route path="/Lancaster" element={<PetDisplay location={LANCASTER}/>}/>
                <Route path="/Palmdale" element={<PetDisplay location={PALMDALE}/>}/>
                <Route path="/upload" element={<UploadPage/>}/>
                <Route path="/view" element={<ViewerPage/>}/>
                <Route path="/*" element={<PetDisplay location={AGOURA}/>}/>
            </Routes>
        </div>
    );
}

export default App;
