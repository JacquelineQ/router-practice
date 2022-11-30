import React from "react";
import {
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Home from "./Home.js";
import About from "./About";
import Blog from "./Blog.js";
import Photos from "./Photos.js"


function NavBar() {
    return (
        <>
            <nav class="mainNav">
            <Link className="navLink" to="/">Home</Link>
            <Link className="navLink" to="/about">About</Link>
            <Link className="navLink" to="/blog">Blog</Link>
            <Link className="navLink" to="/photos">Photos</Link>
        </nav>
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/photos" element={<Photos />} />

       </Routes>
        </>
    )
}

export default NavBar;