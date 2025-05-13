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
            { threshold: 0.1 } // Trigger when 10% of the section is visible
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
            {/* Fixed Image at the Top */}
            <div className="fixed-image">
                <img src={image} alt="Fixed Banner" />
            </div>

            {/* First Section: Image on Left, Text on Right */}
            <div className="section" ref={(el) => (sectionsRef.current[0] = el)}>
                <div className="image-container left">
                    <img src={cafe} alt="About Us 1" />
                </div>
                <div className="text-container">
                    <h2>About us</h2>
                    <p>
                        Bistro & Brew started in April 2023 with passion and commitment, serving people
                        with heartful meals and brews.
                        We are mainly focused on quality and understanding the true blend of spices.
                        In the last 19 months, we have understood that the secret of happiness is only through
                        comfort food. For us simplicity is important, which is reflected in our minimalistic
                        and cozy interiors, where people feel homely.
                        Customers are our top priority, which helps us in building a community, where people
                        feel connected and rooted.
                    </p>
                </div>
            </div>

            {/* Second Section: Image on Right, Text on Left */}
            <div className="section" ref={(el) => (sectionsRef.current[1] = el)}>
                <div className="text-container">
                    <h2>Vision</h2>
                    <p>
                        We believe in sticking to our roots and simple things.
                        We wanted to create a place where quality is never compromised.
                        We have the vision to create a brand name that people can trust.
                        We aim to serve people with the first step in our home city and then across India.
                    </p>
                </div>
                <div className="image-container right">
                    <img src={about1} alt="About Us 2" />
                </div>
            </div>

        </div>
    );
};

export default AboutUs;