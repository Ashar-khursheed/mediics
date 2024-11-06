// src/components/FeaturesSection.js
import React from 'react';
import '../assets/style.css';
import icon1 from '../assets/img/icon1.png';

const FeaturesSection = () => {
    const features = [
        {
            title: "Driver Medicals",
            description: "At DriveThruMedics, we provide comprehensive driver medicals ",
            icon: icon1,
            link: "/driving-medicals"
        },
        {
            title: "Taxi Medicals",
            description: "If you’re a taxi driver needing a medical exam to prove your",
            icon: icon1,
            link: "/taxi-medicals"
        },
        {
            title: "Ambulance Medical",
            description: "Are you a student paramedic ready to take the next step ",
            icon: icon1,
            link: "/ambulance-medicals"
        },
        {
            title: "Sports",
            description: "When it’s time to hit the track, a Motorsport Medical is a crucial",
            icon: icon1,
            link: "/motor-sports"
        },
        {
            title: "Boxing Medical",
            description: "Whether you’re aiming for amateur competitions or a pro debut",
            icon: icon1,
            link: "/boxing-sports"
        },
        {
            title: "Scuba Diving",
            description: "For anyone eager to explore the depths of the ocean, a scuba",
            icon: icon1,
            link: "/scuba-diving"
        },
    ];

    return (
        <section className="features-section">
            <div className="container">
                <div className="section-header">
                    <h5 className="subheading d-flex justify-content-center">Our Key Features</h5>
                    <h1>
                        Revolutionizing Healthcare With Quick, Convenient,
                        <br />
                        And Accessible Medical Services On The Move
                    </h1>
                </div>
                <div className="row text-center gap-0">
                    {features.map((feature, index) => (
                        <div className="col-lg-2 col-md-6 mb-4" key={index}>
                            <div className="feature-card">
                                <img src={feature.icon} alt={feature.title} className="img-fluid" />
                                <h5>{feature.title}</h5>
                                <p>{feature.description}</p>
                                <a href={feature.link} className="cardbtn">Read More →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
