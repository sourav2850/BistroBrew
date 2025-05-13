import React from 'react';
import { useNavigate } from 'react-router-dom';
import cafe from '../assets/static/cafe.jpg'; // Import the image directly

const Car = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/menu');
    };

    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Welcome to Our Cafe</h1>
                <p>
                    Experience the finest coffee and eateries in town. Perfect for your
                    mornings and evenings.
                </p>
                <button onClick={handleButtonClick} className="cta-button">
                    Explore Menu
                </button>
            </div>

            <img
                src={cafe} // Use the imported image directly
                alt="Cafe"
                className="hero-image"
                loading="lazy" // Lazy load the image
                decoding="async" // Asynchronous decoding for improved performance
                width="600" // Ensure width is set to avoid layout shifts
                height="400" // Ensure height is set to avoid layout shifts
                style={{ maxWidth: '100%', height: 'auto' }} // Make the image responsive
            />
        </div>
    );
};

export default React.memo(Car); // Avoid re-renders unless props change
