import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav1 pt-3 pb-3">
    <div className="container">
      <a className="navbar-brand logo" href="#">Drive Thru Medics</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-4">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About Us</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="dropdown-submenu">
                <a className="dropdown-item " href="#" id="navbarDropdown1">
                  Driving <span className="caret">▼</span>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/driving-services">Driving</a></li>
                  <li><a className="dropdown-item" href="/sports-services">Sport</a></li>
                  <li><a className="dropdown-item" href="/travel-services">Travel</a></li>
                  <li><a className="dropdown-item" href="/healthandwellbeing-services">Health and Wellbeing</a></li>
                  <li><a className="dropdown-item" href="/tests-services">Tests</a></li>
                </ul>
              </li>
              <li><a className="dropdown-item" href="/sports-services">Sport</a></li>
              <li><a className="dropdown-item" href="/travel-services">Travel</a></li>
              <li><a className="dropdown-item" href="/healthandwellbeing-services">Health and Wellbeing</a></li>
              <li><a className="dropdown-item" href="/tests-services">Tests</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Stories</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact Us</a>
          </li>
        </ul>
        <a href="#">
          <button className="buttonone" type="button">Book Now</button>
        </a>
      </div>
    </div>
  </nav>
  

  );
};

export default Navbar;
