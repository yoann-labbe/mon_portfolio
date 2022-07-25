import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="/media/IMG_7548-.jpg" alt="mon profil" />
          <h3>Yoann LABBÉ</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" style={({ isActive }) => ({ color: isActive ? '#91BFBC' : '#738A90' })}>
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" style={({ isActive }) => ({ color: isActive ? '#91BFBC' : '#738A90' })}>
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" style={({ isActive }) => ({ color: isActive ? '#91BFBC' : '#738A90' })}>
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" style={({ isActive }) => ({ color: isActive ? '#91BFBC' : '#738A90' })}>
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/yoann-labbe/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-linkedin"></i></a>
            </li>
            <li>
                <a href="https://github.com/yoannlabbe" target="_blank" rel="noopener noreferrer" ><i className="fab fa-github"></i></a>
            </li>
        </ul>
      </div>
      <div className="signature">
        <p>Yoann labbé - 2022</p>
      </div>
    </div>
  );
};

export default Navigation;
