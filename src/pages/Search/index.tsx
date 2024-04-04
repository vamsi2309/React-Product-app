import React, { useEffect, useState } from "react";
import axiosInstance from "../../services";
import { useQuery } from "react-query";
import Carousel from "../../components/carosalSlide";
import "../HomePage/home.style.css";
import Loader from "../../components/Loader";
import useDebounce from "../../hooks/useDebounce"; // Import the useDebounce hook
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
    };
}

function Home() {
    const [search, setSearch] = useState("");
    const [isSearch, setIsSearch] = useState(false);
    const navigate = useNavigate();

    const fetchApi = async () => {
        const response = await axiosInstance.get("/products");
        return response.data;
    };
    const { data, isLoading } = useQuery(["query"], fetchApi);
    const carouselData = data ? data.slice(0, 6) : [];
    const [filteredData, setFilteredData] = useState<Prod[]>(data);
   
    const debouncedSearch = useDebounce(search, 400);
    useEffect(() => {
        if (data) {
            setFilteredData(data.filter((item: Prod) => item.title.toLowerCase().includes(search.toLowerCase())));
            setIsSearch(true)
        }

    }, [debouncedSearch]);


    const handleClick = (id: number) => {
        navigate(`products/${id}`);
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="prod">
            <div className="job">
                <input
                    type="text"
                    placeholder="Search....."
                    className="field"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="card">
                {filteredData?.map((item: Prod, index: number) => (
                    <div className="card-box" key={index} onClick={() => handleClick(item.id)}>
                        <img src={item.image} alt={item.title} className="thumb" />
                        <div className="card-text">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
