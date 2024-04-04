import React, { useEffect, useState } from "react";
import "./carosal.style.css";

interface Prod {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

interface data {
    carouselData: Prod[];
    issearch: boolean;
}

function Carosal(props: data) {
    const { carouselData, issearch } = props;
    const [activeIndex, setActiveIndex] = useState(0);

    const handleLeft = () => {
        {
            activeIndex === 0
                ? setActiveIndex(carouselData.length - 1)
                : setActiveIndex(activeIndex - 1);
        }
    };
    const handleRight = () => {
        {
            activeIndex === carouselData.length - 1
                ? setActiveIndex(0)
                : setActiveIndex(activeIndex + 1);
        }
    };

    useEffect(() => {
        const time = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1)
        }, 1500)
        return () => clearTimeout(time);
    }, [carouselData.length])

    return (
        <div className="container">
            <button className="arrow arrow-left" onClick={handleLeft}>
                Left
            </button>
            {carouselData?.map((item: Prod, index: number) => (
                <><img
                    src={item.image}
                    alt={item.title}
                    key={index}
                    className={activeIndex === index ? "slider" : "slide-hidden"} />
                    <div className={activeIndex === index ? "title" : "title-hidden"}>{item.title}</div></>

            ))}
            <button className="arrow arrow-right" onClick={handleRight}>
                Right
            </button>
            <span className="indicater">
                {carouselData?.map((_, index: number) => (
                    <button
                        key={index}
                        onClick={() => {
                            setActiveIndex(index);
                        }}
                        className={
                            activeIndex === index ? "indicaters" : "indicators-hidden"
                        }
                    />
                ))}
            </span>
        </div >
    );
}
export default Carosal;
