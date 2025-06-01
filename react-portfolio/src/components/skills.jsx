import "./skills.css"
import HTML from "../assets/html5.png"
import CSS from "../assets/css3.png"
import JS from "../assets/javascript.png"
import React from "../assets/react.png"
import Sass from "../assets/sass2.png"
import VsCode from "../assets/vs.png"
import Figma from "../assets/figma.png"
import Photoshop from "../assets/ps.png"



function Skills() {
    return (
    <>
            <div className="skill-container">
                <img src={HTML} className="skill-icon" alt="html icon"></img>
                <img src={CSS} className="skill-icon" alt="css icon"></img>
                <img src={JS} className="skill-icon" alt="javascript icon"></img>
                <img src={Sass} className="skill-icon" alt="sass icon"></img>
                <img src={React} className="skill-icon" alt="react icon"></img>
                <img src={VsCode} className="skill-icon" alt="vs code icon"></img>
                <img src={Figma} className="skill-icon" alt="figma icon"></img>
                <img src={Photoshop} className="skill-icon" alt="phonoshop icon"></img>
            </div>
    </>
    ) 
}

export default Skills; 

