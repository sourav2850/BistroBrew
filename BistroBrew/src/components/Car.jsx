import React from 'react';
import { useNavigate } from 'react-router-dom'
import cafe from "../assets/static/cafe.jpg";

const Car = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleButtonClick = () => {
        navigate('/menu'); // Redirect to the '/menu' page
    };
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Welcome to Our Cafe</h1>
                <p>Experience the finest coffee and eateries in town. Perfect for your mornings and evenings.</p>
                <button onClick={handleButtonClick} className="cta-button">Explore Menu</button>
            </div>
            <img src={cafe} alt="Cafe" className="hero-image" />
        </div>
    );
};

export default Car;

