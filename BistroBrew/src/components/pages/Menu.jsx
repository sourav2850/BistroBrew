import React, { useState } from "react";

// Import your menu images
import coffeeMenu from "../../assets/static/coffee.jpg";
import drinkMenu from "../../assets/static/drinks.jpg";
import friesMenu from "../../assets/static/fries.jpg";
import burgerMenu from "../../assets/static/burger.jpg";
import menuTop from "../../assets/static/menu-top.jpg"; // Import the new image

const MenuPage = () => {
    const [currentMenu, setCurrentMenu] = useState(coffeeMenu);
    const [activeMenu, setActiveMenu] = useState("Coffee");

    const menus = [
        { name: "Coffee", image: coffeeMenu },
        { name: "Cold Brew", image: drinkMenu },
        { name: "Fries", image: friesMenu },
        { name: "Burger", image: burgerMenu },
    ];

    return (
        <div className="menu-page">
            {/* Add the new image at the top */}
            <div className="menu-top-image">
                <img src={menuTop} alt="Menu Top" className="menu-top-img" />
            </div>

            <h2 className="menu-heading">Delight your taste buds—check out our irresistible menu!</h2>

            <div className="menu-nav">
                {menus.map((menu, index) => (
                    <button
                        key={index}
                        className={`menu-btn ${activeMenu === menu.name ? "active" : ""}`}
                        onClick={() => {
                            setCurrentMenu(menu.image);
                            setActiveMenu(menu.name);
                        }}
                    >
                        {menu.name}
                    </button>
                ))}
            </div>

            <div className="menu-display">
                <img src={currentMenu} alt="Menu" className="menu-image" />
            </div>
        </div>
    );
};

export default MenuPage;
