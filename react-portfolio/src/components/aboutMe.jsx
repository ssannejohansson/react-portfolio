import "./aboutMe.css"
import AboutImg from "../assets/woman-silhouette.png"

function aboutMe () {

  return (
  <>
  <div className="aboutMe-container" id="about">
    <div className="img-container">
      <img src={AboutImg} className="about-img" alt="https://www.vecteezy.com/free-vector/woman-side-silhouette"/>
    </div>

    <div className="aboutMe-info">
      <p className="aboutMe-infotxt">My name is Sanne and I'm a certified Front-End Developer educated both to write clean,
        responsive code from scratch and to use framworks and libraries as React, Bootstrap and Tailwind. </p>
      <p className="aboutMe-infotxt">Prior to my Front-End Development studies I've graduated in Aesthetics-Media, 
        which included studies in digital creativity, photography, film and media production and aesthetic communication.</p>
      <p className="aboutMe-infotxt">My passion lays in making a visually appealing and user-friendly user experience,
        and to create this down to the smallest of details. </p>

      <div className="aboutMe-addinfo">
        <p className="aboutMe-text">Age: <span>30</span></p>
        <p className="aboutMe-text">From: <span>Sweden</span></p>
        <p className="aboutMe-text">Language: <span>Swedish, English</span></p> 
        <p className="aboutMe-text">Availability: <span>For hire, project employment and freelance</span></p> 
      </div>
    </div>
  </div>
  </>
  )
}

export default aboutMe;
  