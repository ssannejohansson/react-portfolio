import "./projectCard.css"


function ProjectCard(props) {

  return (
  <>
      <div className="card-area" id="portfolio"> 
        <div className="card">
          <img src={props.image} alt="image" className="card-image"></img>

          <div className="overlay">
            <h3 className="card-title">{props.title}</h3>
            <p className="card-info">{props.info}</p>
            <a href={props.link} target="_blank" className="card-link">Show Live<i class="fa-solid fa-arrow-right"></i></a>
          </div>    
        </div>
      </div>
  </>
    )
}

export default ProjectCard;