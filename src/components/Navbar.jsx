import { BrowserRouter as Link } from 'react-router-dom';
import "./style.css"

export default function Navbar() {

    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/skills'>Skills</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Me</Link>
                </li>
            </ul>
        </div>
      );
}