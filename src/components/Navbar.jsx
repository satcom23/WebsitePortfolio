import { BrowserRouter as Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <div className="Navbar">
          <header>
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
          </header>
        </div>
      );
}