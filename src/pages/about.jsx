import "./about.css"
import Skills from "../components/skills.jsx"
import AboutMe from "../components/aboutMe.jsx"

function About() {


  return (
  <>     
    <div className="about-container" id="about">
      <h2 className="about-title">About me</h2>
        <AboutMe/> 
        <Skills/>
    </div>
  </>
  )
}

export default About;