import {HashLink} from 'react-router-hash-link';
import "../components/navbar.css"



function Navbar() {
    return (
    <>
        <div className="nav-container">
            <div className="nav-menu">
                <ul className="nav-links">
                    <li><HashLink smooth to="/#home"><i className="fa-solid fa-house"></i></HashLink></li>
                    <li><HashLink smooth to="#about"><i className="fa-solid fa-user"></i></HashLink></li>
                    <li><HashLink smooth to="#portfolio"><i className="fa-solid fa-briefcase"></i></HashLink></li>
                    <li><HashLink smooth to="#contact"><i className="fa-solid fa-envelope"></i></HashLink></li>
                </ul>
            </div> 
        </div>
    </>

    )
}

export default Navbar; 

