import "./projectCard.css"
import Patagonia from "../assets/bhromaon.png"

function ProjectCard(props) {

    return (
        <div>
            <div className="container">

<ul className="cards">
  <li>
    <a href="" className="card">
      <img src={Patagonia} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div className="card__header-text">
            <h3 className="card__title">{props.title}</h3>            
          </div>
        </div>
        <p className="card__description">{props.tags}</p>
      </div>
    </a>      
  </li> 
</ul>
</div>
        </div>
    )
}





export default ProjectCard;