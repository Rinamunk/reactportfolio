import { NavLink } from "react-router-dom";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Face2Icon from '@mui/icons-material/Face2';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import * as React from 'react';



export default function Nav (){

    return(
        <section>
            <input type="checkbox" id="active"></input>
            <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
        <nav class="wrapper">
            <ul>
                
                <li>
                    <HomeWorkIcon color="action"/>
                    <NavLink to="/">Hjem</NavLink></li>
              
                <li>
                    <ColorLensIcon color="action"/><NavLink to="/kunst">Kunst  </NavLink></li>
                <li>
                <Face2Icon color="action"/>
                    <NavLink to="/ommig">Om Mig</NavLink></li>
 
            </ul>
            
        </nav>
        </section>

    )
}
