import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImage from '../assets/img/Aboutus/logone.jpg'; // Adjust image path as per your structure
import '../assets/style.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    // <nav className="navbar navbar-expand-lg nav1 pt-3 pb-3">
    //   <div className="container">
    //     {/* <a className="navbar-brand logo" href="#">
    //       <img src={logoImage} alt="Logo" className="logoimageone" />
    //     </a> */}
    //     <a class="navbar-brand logo" href="/home">Drive Thru Medics</a>
    //     {/* <img className='logoimageone' src={logoImage} /> */}
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
    //       aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-4">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/home">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/about">About Us</a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
    //             data-bs-toggle="dropdown" aria-expanded="false">
    //             Services
    //           </a>
    //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <li className="dropdown-submenu">
    //               <a className="dropdown-item " href="#" id="navbarDropdown1">
    //                 Driving <span className="caret">▼</span>
    //               </a>
    //               <ul className="dropdown-menu">
    //                 <li><a className="dropdown-item" href="/driving-medicals">Driver Medicals</a></li>
    //                 <li><a className="dropdown-item" href="/taxi-medicals">Taxi Medicals </a></li>
    //                 <li><a className="dropdown-item" href="/ambulance-medicals">Ambulance Medicals</a></li>
    //                 <li><a className="dropdown-item" href="/hgv-medicals">HGV/LGV Medicals</a></li>


                    
    //               </ul>
    //             </li>




    //             <li className="dropdown-submenu">
    //               <a className="dropdown-item " href="#" id="navbarDropdown1">
    //                 Sports <span className="caret">▼</span>
    //               </a>
    //               <ul className="dropdown-menu">
    //                 <li><a className="dropdown-item" href="/motor-sports">Motorsport </a></li>
    //                 <li><a className="dropdown-item" href="/boxing-sports">Boxing  Sport </a></li>
    //                 <li><a className="dropdown-item" href="/scuba-diving">Scuba Diving</a></li>
    //                 <li><a className="dropdown-item" href="/horse-riding">Horse Riding                   </a></li>
    //                 <li><a className="dropdown-item" href="/sky-diving">SkyDiving </a></li>
    //               </ul>
    //             </li>


    //             <li className="dropdown-submenu">
    //               <a className="dropdown-item " href="#" id="navbarDropdown1">
    //                 Travel <span className="caret">▼</span>
    //               </a>
    //               <ul className="dropdown-menu">
    //                 <li><a className="dropdown-item" href="/fit-fly">Fit to fly </a></li>
    //                 <li><a className="dropdown-item" href="/travel-vaacines">Travel Vaacines </a></li>
    //               </ul>
    //             </li>


    //             <li className="dropdown-submenu">
    //               <a className="dropdown-item " href="#" id="navbarDropdown1">
    //                 Health and Wellbeing <span className="caret">▼</span>
    //               </a>
    //               <ul className="dropdown-menu">
    //                 <li><a className="dropdown-item" href="/iv-drip">IV Drips
    //                 </a></li>
    //                 <li><a className="dropdown-item" href="/b12-injections">Vit B12 Injections
    //                 </a></li>
    //                 <li><a className="dropdown-item" href="/cupping-therapy">Cupping Therapy Service
    //                 </a></li>
    //                 <li><a className="dropdown-item" href="/sports-massage">Sports Massage
    //                 </a></li>
    //                 <li><a className="dropdown-item" href="/chiropractic-services">Chiropractic Services
    //                 </a></li>



    //               </ul>
    //             </li>


    //             <li className="dropdown-submenu">
    //               <a className="dropdown-item " href="#" id="navbarDropdown1">
    //                 Tests <span className="caret">▼</span>
    //               </a>
    //               <ul className="dropdown-menu">
    //                 <li><a className="dropdown-item" href="/sexual-health">Sexual Health Screens

    //                 </a></li>
    //                 <li><a className="dropdown-item" href="/blood-test">All blood tests
    //                 </a></li>
    //                 <li><a className="dropdown-item" href="/alcohol-drug">Alcohol and Drug Tests
    //                 </a></li>
    //                 <li><a className="dropdown-item" href="/exercise-ecg">Exercise Ecg
    //                 </a></li>
                    



    //               </ul>
    //             </li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Stories</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/contact">Contact Us</a>
    //         </li>
    //       </ul>
    //       <a href="/booking-form">
    //         <button className="buttonone" type="button">Book Now</button>
    //       </a>
    //     </div>
    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-lg nav1 pt-3 pb-3">
    <div className="container">
        <Link className="navbar-brand logo" to="/home">Drive Thru Medics</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-4">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li className="dropdown-submenu">
                            <a className="dropdown-item" href="#" id="navbarDropdown1">
                                Driving <span className="caret">▼</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/driving-medicals">Driver Medicals</Link></li>
                                <li><Link className="dropdown-item" to="/taxi-medicals">Taxi Medicals</Link></li>
                                <li><Link className="dropdown-item" to="/ambulance-medicals">Ambulance Medicals</Link></li>
                                <li><Link className="dropdown-item" to="/hgv-medicals">HGV/LGV Medicals</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown-submenu">
                            <a className="dropdown-item" href="#" id="navbarDropdown1">
                                Sports <span className="caret">▼</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/motor-sports">Motorsport</Link></li>
                                <li><Link className="dropdown-item" to="/boxing-sports">Boxing Sport</Link></li>
                                <li><Link className="dropdown-item" to="/scuba-diving">Scuba Diving</Link></li>
                                <li><Link className="dropdown-item" to="/horse-riding">Horse Riding</Link></li>
                                <li><Link className="dropdown-item" to="/sky-diving">SkyDiving</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown-submenu">
                            <a className="dropdown-item" href="#" id="navbarDropdown1">
                                Travel <span className="caret">▼</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/fit-fly">Fit to Fly</Link></li>
                                <li><Link className="dropdown-item" to="/travel-vaccines">Travel Vaccines</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown-submenu">
                            <a className="dropdown-item" href="#" id="navbarDropdown1">
                                Health and Wellbeing <span className="caret">▼</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/iv-drip">IV Drips</Link></li>
                                <li><Link className="dropdown-item" to="/b12-injections">Vit B12 Injections</Link></li>
                                <li><Link className="dropdown-item" to="/cupping-therapy">Cupping Therapy</Link></li>
                                <li><Link className="dropdown-item" to="/sports-massage">Sports Massage</Link></li>
                                <li><Link className="dropdown-item" to="/chiropractic-services">Chiropractic Services</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown-submenu">
                            <a className="dropdown-item" href="#" id="navbarDropdown1">
                                Tests <span className="caret">▼</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/sexual-health">Sexual Health Screens</Link></li>
                                <li><Link className="dropdown-item" to="/blood-test">All Blood Tests</Link></li>
                                <li><Link className="dropdown-item" to="/alcohol-drug">Alcohol and Drug Tests</Link></li>
                                <li><Link className="dropdown-item" to="/exercise-ecg">Exercise ECG</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/stories">Stories</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
            </ul>
            <Link to="/booking-form">
                <button className="buttonone" type="button">Book Now</button>
            </Link>
        </div>
    </div>
</nav>
  );
};

export default Navbar;
