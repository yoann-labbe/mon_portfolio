import React from "react";
import Navigation from "../Components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
          <div className="contactBox">
            <h1>Contactez-moi</h1>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Villenave d'Ornon</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <CopyToClipboard text="0786863787">
                  <span
                    className="clickInput"
                    onClick={() => {
                      alert("Téléphone copié !");
                    }}
                  >
                    07 86 86 37 87
                  </span>
                </CopyToClipboard>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <CopyToClipboard text="y.labbe.contact@gmail.com">
                  <span
                    className="clickInput"
                    onClick={() => {
                      alert("Email copié !");
                    }}
                  >
                    y.labbe.contact@gmail.com
                  </span>
                </CopyToClipboard>
              </li>
            </ul>
          </div>
          <div className="socialNetworks">
            <ul>
                <a
                  href="https://www.linkedin.com/in/yoann-labbe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>LinkedIn</h4>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/yoannlabbe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>Github</h4>
                  <i className="fab fa-github"></i>
                </a>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Contact;
