import React from "react";
import Navigation from "../Components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Yoann Labbé</h1>
          <h2>Développeur Full Sttack</h2>
          <div className="pdf">
            <a href="./media/CV_Yoann_Labbe.pdf" target="_blank">
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
