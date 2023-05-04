import { Link } from 'react-router-dom';
import './Nav.css';

export default function NavBar() {
  return (
    <nav>
      <h1>Math Magicians</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculate">Calculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
  );
}
