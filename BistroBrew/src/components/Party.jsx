import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import party from '../assets/static/party.jpg';

const Party = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Triggers animation only once when it enters the viewport
        threshold: 0.1,    // Triggers when 10% of the image is visible
    });

    return (
        <div className="party-container">
            <div className="party-content">
                {/* Image with lazy loading and optimized for performance */}
                <motion.img
                    ref={ref}
                    src={party}
                    alt="Party"
                    className="party-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 1 }}
                    loading="lazy" // Lazy load the image
                    decoding="async" // Async decoding for better performance
                    width="100%" // Make it responsive
                    height="auto" // Make it responsive
                />
                <div className="party-text">
                    <h2>BOOK A PARTY!</h2>
                    <p>
                        Looking to throw a memorable party? Our party services are designed
                        to create an unforgettable experience with customized themes,
                        catering, music, and more. Whether it's a birthday, corporate event,
                        or a celebration with friends, we’ve got you covered!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Party); // Prevent unnecessary re-renders

