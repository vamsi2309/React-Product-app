import React, { useEffect, useState } from "react";
import axiosInstance from "../../services";
import { useQuery } from "react-query";
import Carousel from "../../components/carosalSlide";
import "./home.style.css"
import Loader from "../../components/Loader";
import useDebouncedEffect from "../../hooks/useDebounce"
import { useNavigate } from "react-router-dom";

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
    }
}

function Home() {
    const [search, setSearch] = useState("")
    const [isSearch, setIsSearch] = useState(false)
    const navigate = useNavigate()
    // const debounceValue = useDebounceValue(search);

    const fetchApi = async () => {
        const response = await axiosInstance.get("/products");
        return response.data;
    };
    const { data, isLoading } = useQuery(["query"], fetchApi);
    const carouselData = data ? data.slice(0, 6) : [];
    const filteredData = data ? data.filter((item: Prod) => item.title.toLowerCase().includes(search.toLowerCase())) : [];


    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        setIsSearch((prev) => !prev)
    };
    const hadleClick = (id: number) => {
        navigate(`products/${id}`)
    }


    if (isLoading) {
        <Loader />
    }

    return (
        <div className="prod">
            <Carousel carouselData={carouselData} issearch={isSearch} />
            <div className="card">
                {filteredData?.map((item: Prod, index: number) => (
                    <>
                        <div className="card-box" onClick={() => { hadleClick(item.id) }}>
                            <img
                                src={item.image}
                                alt={item.title}
                                key={index}
                                className="thumb"
                            />
                            <div className="card-text">
                                {item.title}
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}
export default Home;

