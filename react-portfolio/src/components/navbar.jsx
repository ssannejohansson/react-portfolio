import {HashLink} from 'react-router-hash-link';
import "./navbar.css"



function Navbar() {
    return (
    <>
        <div className="nav-container">
            <div className="nav-menu">
                <ul className="nav-links">
                    <li><HashLink smooth to="/#home" aria-label="link to home section"><i className="fa-solid fa-house"></i></HashLink></li>
                    <li><HashLink smooth to="#about" aria-label="link to about me section"><i className="fa-solid fa-user"></i></HashLink></li>
                    <li><HashLink smooth to="#portfolio" aria-label="link to portfolio section"><i className="fa-solid fa-briefcase"></i></HashLink></li>
                    <li><HashLink smooth to="#contact" aria-label="link to contact section"><i className="fa-solid fa-envelope"></i></HashLink></li>
                </ul>
            </div> 
        </div>
    </>

    )
}

export default Navbar; 

