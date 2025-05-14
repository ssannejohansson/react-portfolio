import {Link} from 'react-router';
import "../components/navbar.css"

function Navbar() {
    return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav> 
    </div>

)
}

export default Navbar; 

