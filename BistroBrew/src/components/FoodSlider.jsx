import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import alfredo from '../assets/static/AlfredoPasta.jpg';
import cilantro from '../assets/static/CilantroPizza.jpg';
import peri from '../assets/static/PeriPeri.jpg';
import pinkPasta from '../assets/static/PinkPasta.jpg';


const foodItems = [
    { id: 1, img: alfredo, name: "Alfredo Pasta" },
    { id: 2, img: cilantro, name: "Spicy Cilantro Pesto Pizza" },
    { id: 3, img: peri, name: "Peri Peri Paneer Pizza" },
    { id: 4, img: pinkPasta, name: "Pink Sauce Fusion Pasta" },
];




const FoodSlider = () => {
    return (
        <div className="food-slider">
            <h1> Popular items</h1>
            <Swiper
                slidesPerView={4} // Show 4 images at a time
                spaceBetween={20} // Spacing between images
                navigation={true} // Enable left/right buttons
                modules={[Navigation]}
                className="mySwiper"
            >
                {foodItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="food-card">
                            <img src={item.img} alt={`Food ${item.id}`} />
                            <div className="food-price">
                                <span className="food-name">{item.name}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FoodSlider;
