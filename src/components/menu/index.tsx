import React, { useState } from "react";
import "./menu.style.css";
import { To, useNavigate } from "react-router-dom";

function Menu() {
    const navigate = useNavigate();
    const [click, setClick] = useState(false);
    const [index1, setIndex] = useState(2);

    const menu = [
        {
            element: "Home",
            path: "/"
        },
        {
            element: "Search",
            path: "/search"
        },
        {
            element: "User Management",
            path: "/user-management"
        },
        {
            element: "Cart",
            path: "/cart"
        }
    ];

    const handleClick = (path: To, index: number) => {
        navigate(path);
        if (path === "/search" && index === 1) {
            setClick(true)
        } else {
            setClick(false)
        }
        setIndex(index)
    };

    return (
        <div className="menu">
            <div className="menu-item">
                {menu.map((item, index) => (
                    <div className={(index1 === index) ? "sss" : "vvv"} key={index} onClick={() => handleClick(item.path, index)}>

                        <span>{item.element}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
