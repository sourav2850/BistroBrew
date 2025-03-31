import React from 'react';
import heroImage from "../assets/static/hero.png";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>The Best <span>Organic</span> Food Around</h1>
                <p>All kinds of organic food collection is here. Find your food as you need it.</p>
                <div className="hero-buttons">
                    <button className="primary-btn">Order Now</button>
                    <button className="secondary-btn">Explore</button>
                </div>
            </div>

            <div className="hero-image">
                <img src={heroImage} alt="Delicious organic food" />
            </div>
        </section>
    );
};

export default Hero;
