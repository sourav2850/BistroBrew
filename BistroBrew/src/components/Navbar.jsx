import { Link } from "react-router-dom";
import logo from '../assets/static/logo.jpg';

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="logo"><img className="logo" src={logo} alt="Logo" /></Link>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>

                <li>
                    <Link to="/aboutus">About Us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
