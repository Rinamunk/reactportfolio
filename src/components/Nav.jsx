import { NavLink } from "react-router-dom";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Face2Icon from '@mui/icons-material/Face2';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import * as React from 'react';



export default function Nav (){
    const openNav = () => {
        const overlay = document.getElementById("overlay");
        const content = document.querySelector(".content")
        overlay.style.width = "100%";
        content.classList.add("content-open");
    };
    const closeNav =() => {
        const overlay = document.getElementById("overlay");
        const content = document.querySelector(".content");
        overlay.style.width = "0";
        content.classList.remove("content-open");
    }

    return(
        <section>
            <input type="checkbox" id="active"></input>
            <label htmlFor="active" className="menu-btn"><i className="fas fa-bars"></i></label>
        <nav className="wrapper">
            <ul>
                
                <li>
                    <HomeWorkIcon color="action"/>
                    <NavLink to="/" onClick={closeNav}>Hjem</NavLink></li>
              
                <li>
                    <ColorLensIcon color="action"/>
                    <NavLink to="/kunst" onClick={closeNav}>Kunst  </NavLink></li>
                <li>
                <Face2Icon color="action"/>
                    <NavLink to="/ommig" onClick={closeNav}>Om Mig</NavLink></li>
 
            </ul>
            
        </nav>
        </section>

    )
}
