import React, { useContext } from "react";
import './Skills.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.pdf'
import { themeContext } from "../../Context";

function Skills() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div>
      <div className="skills" id='Skills' style={{marginTop : 140}}>
        <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Explore My</span>
        <span>Skills</span>
        <span>To secure a challenging position in a dynamic and innovative company,<br /> where I can
utilize my skills and  expertise to contribute to the organization's success and 
professional growth <br /> while advancing my own career.</span>
        <a href={Resume} download>

        <button className="button s-button">Download CV</button>
        </a>
        </div>
        <div className="blur s-blur1" style={{background : "#ABF1FF94"}}></div>

        < div className="cards">
        <div
          style={{ left: "14rem" }}
          
        >
            <Card
            emoji = {HeartEmoji}
            heading = {'Design'}
            detail = {"Html, Css, JavaScript, React, Nodejs, Express"}
            />
            </div>

            <div style={{ left: "-4rem", top: "12rem" }}>
            <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
          </div>

          <div style={{ left: "12rem", top: "19rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            
          />
          </div>
          <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
        </div>
      </div>
    </div>
  )
}

export default Skills
