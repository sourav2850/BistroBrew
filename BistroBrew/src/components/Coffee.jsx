import React from "react";
import { motion } from "framer-motion";
import beans from "../assets/static/beans.jpg";
import cold from "../assets/static/cold.jpg";


const Coffee = () => {
    return (
        <section className="coffee-feature">
            <div className="coffee-container">
                {/* First Coffee Feature */}
                <motion.div
                    className="coffee-item"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <img src={beans} alt="Coffee Pouring" className="coffee-image" />
                    <div className="coffee-text">
                        <h2>Coffee Heaven</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <button className="coffee-btn">View All →</button>
                    </div>
                </motion.div>

                {/* Second Coffee Feature */}
                <motion.div
                    className="coffee-item coffee-reverse"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="coffee-text">
                        <h2>Signature blend</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <button className="coffee-btn">View All →</button>
                    </div>
                    <img src={cold} alt="Coffee Drinks" className="coffee-image" />
                </motion.div>
            </div>
        </section>
    );
};

export default Coffee;
