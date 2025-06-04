import "./portfolio.css"
import Project from "../components/projectCard.jsx"
import Bhromaon from "../assets/bhromaon.png"
import Calculator from "../assets/calculator.png"
import ToDo from "../assets/todolist.png"
import CatFact from "../assets/catfact.png"




function Portfolio() {

  return (
  <> 
    <div className="portfolio-container">
      <h2 className="portfolio-title">Portfolio</h2>
        <div className="card-container">
 
          <Project
            image={Bhromaon}
            title= "Bhromaon"
            info="A course test in building a complete front page from a Figma-design in 12 hours. Created using HTML, CSS and Sass."
            link= "https://ssannejohansson.github.io/test-bhromaon"
          />
       
          <Project
            image={CatFact}
            title= "Random Cat-facts"
            info="A random cat-facts generator. Created using React, HTML, CSS and JavaScript."
            link= "https://ssannejohansson.github.io/random-fact/"
          />

          <Project
          image={ToDo}
          title= "To-Do List"
          info="A To-Do List with five different color-themes to choose from. Created using HTML, CSS and JavaScript, using local storage to save list-items and theme when closing and re-opening the window."
          link= "https://ssannejohansson.github.io/to-do-list/"
          />

          <Project
            image={Calculator}
            title= "Calculator"
            info="A calculator with five different themes inspired by known brands as Apple, Android and Microsoft. Created using HTML, CSS and JavaScript. "
            link= "https://ssannejohansson.github.io/calculator/"
          />
        </div>
      </div>
  </>
  )
}

export default Portfolio;