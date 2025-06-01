import { HashLink as Link} from 'react-router-hash-link';
import "./home.css"




function Home() {

  return (
  <>
    <div className="home-container" id="home">
      <div className="title-container">
        <h3 className="title-top" id="text-focus-in" >Hello, I'm Sanne and I'm a </h3>
        <h1 className="title" id="focus-in-expand">Front-end</h1>
        <h1 className="title-second" id="focus-in-expand">developer</h1>
        <h3 className="title-bottom" id="text-focus-in"> aspiring Full Stack Software Developer</h3>
      </div>

      <div className="button-container">
        <button><Link className="link" smooth to="/#portfolio">View work</Link></button> 
        <button><Link className="link" smooth to="/#contact">Hire me</Link></button>
      </div>
    </div>
  </>
  )
}

export default Home;
