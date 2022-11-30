import React from "react";
import {
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Curiosity from "./Curiosity.js";
import Perseverance from "./Perseverance.js";


function Photos(){
    return (
        <>
        <h2>This is the Photos Page</h2>
            <Link to="./photos/curiosity">Curiosity</Link>
            <Link to="./photos/perseverance"> Perseverance</Link>
        <nav>
        
        <Routes>
        <Route path="./photos/curiosity" element={<Curiosity />} />
        <Route path="./photos/perseverance" element={<Perseverance />} />
            
        </Routes>

        </nav>
        </>
    )
}

export default Photos;