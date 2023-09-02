import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="math_magician_info">
      <a href="./">
        MathMagician website
      </a>
    </div>
    <div className="links">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
