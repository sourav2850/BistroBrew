import React, { useEffect, useRef } from 'react';
import about1 from '../../assets/static/about1.jpg';
import cafe from '../../assets/static/about-1.jpg';
import image from '../../assets/static/image.png';

const AboutUs = () => {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="about-us">
            {/* Header Image - Non-sticky, properly sized */}
            <div className="header-image-wrapper">
                <img
                    src={image}
                    alt="Bistro & Brew Header"
                    className="header-image"
                    loading="eager"
                />
            </div>

            {/* First Section */}
            <div className="section" ref={(el) => (sectionsRef.current[0] = el)}>
                <div className="image-container left">
                    <img
                        src={cafe}
                        alt="Our Cafe"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className="text-container">
                    <h2>About us</h2>
                    <p>
                        Bistro & Brew started in April 2023 with passion and commitment, serving people
                        with heartful meals and brews. We are mainly focused on quality and understanding
                        the true blend of spices. In the last 19 months, we have understood that the secret
                        of happiness is only through comfort food.
                    </p>
                </div>
            </div>

            {/* Second Section */}
            <div className="section" ref={(el) => (sectionsRef.current[1] = el)}>
                <div className="text-container">
                    <h2>Vision</h2>
                    <p>
                        We believe in sticking to our roots and simple things.
                        We wanted to create a place where quality is never compromised.
                        We have the vision to create a brand name that people can trust.
                    </p>
                </div>
                <div className="image-container right">
                    <img
                        src={about1}
                        alt="Our Vision"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>
        </div>
    );
};

export default React.memo(AboutUs);