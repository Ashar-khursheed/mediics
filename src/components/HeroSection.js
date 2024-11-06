// src/components/HeroSection.js
import React from 'react';
//import './HeroSection.css'; // You can create a specific CSS file for this component
import '../assets/style.css';
const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="container">
                <div className="hero-content text-left">
                    <h5 className="text-uppercase d-flex justify-content-center headtextone">
                        Welcome to Drive Thru Medics
                    </h5>
                    <h1 className="display-4 fw-bold">Your Convenient Health Care Solution!</h1>
                    <p className="lead">
                    At DriveThruMedics, we offer fast, convenient, and quality healthcare services at your doorstep or nearby locations, tailored to your needs
                    </p>
                    <a href="/about">
                        <button className="buttonone" type="button">
                            Explore More
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
