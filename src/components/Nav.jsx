import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Face2Icon from "@mui/icons-material/Face2";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openNav = () => {
    setMenuOpen(true);
  };

  const closeNav = () => {
    setMenuOpen(false);
  };

  return (
    <section>
      
      <input type="checkbox" id="active" checked={menuOpen} />
      <label htmlFor="active" className="menu-btn" onClick={menuOpen ? closeNav : openNav}>
        <i className="fas fa-bars"></i>
      </label>
      <nav className="wrapper">
        <ul>
          <li>
            <HomeWorkIcon color="action" fontSize="large" />
            <NavLink to="/" onClick={closeNav}>
              Hjem
            </NavLink>
          </li>
          <li>
            <ColorLensIcon color="action" fontSize="large" />
            <NavLink to="/kunst" onClick={closeNav}>
              Kunst
            </NavLink>
          </li>
          <li>
            <Face2Icon color="action" fontSize="large" />
            <NavLink to="/ommig" onClick={closeNav}>
              Om Mig
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}
