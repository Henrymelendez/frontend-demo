import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../css/header.scss'; // Import your SCSS stylesheet
import feather from 'feather-icons';

const Header = () => {
    useEffect(() => {
        feather.replace(); // This will replace all feather-icons data-feather attributes with SVG
      }, []);
    
  return (
    <div className="header">  
      <div className="header__logo">
        <strong>LOGO</strong>
      </div>
      <nav className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              {/* Icon here */}
              <span>Home</span>
            </Link>
          </li>
          {/* ... other navbar items ... */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
