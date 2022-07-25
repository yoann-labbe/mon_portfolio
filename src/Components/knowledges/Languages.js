import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

export default class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "HTML", xp:1},
            {id: 2, value: "CSS", xp:1},
            {id: 3, value: "JavaScript", xp:1},
            {id: 4, value: "Php", xp:0.3},
        ],
        frameworks: [
            {id: 1, value: "React.Js", xp:1},
            {id: 2, value: "Node.JS", xp:1},
            {id: 3, value: "Sass", xp:0.3},
            {id: 4, value: "Material UI", xp:1},
            // {id: 5, value: "Tailwind CSS", xp:0.5},
        ],
        // others: [
        //   {id: 1, value: "MYSQL", xp:1},
        //   {id: 2, value: "Sequel Pro", xp:1},
        //   {id: 3, value: "MAMP", xp:0.8},
        //   {id: 3, value: "phpMyAdmin", xp:0.3},
        // ],
    }

  render() {
    let {languages, frameworks} = this.state;
     
    return (
      <div className='languagesFrameworks'>  
      <ProgressBar
      languages={languages} 
      className="languageDisplay"
      title="languages"
      />
      <ProgressBar 
      languages={frameworks}
      className="frameworkDisplay"
      title="frameworks & library "
      />
      {/* <ProgressBar 
      languages={others}
      className="otherDisplay"
      title="technology "
      /> */}
      </div>
    );
  }
}
