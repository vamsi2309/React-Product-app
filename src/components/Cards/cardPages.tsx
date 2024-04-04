import React from "react";
import axiosInstance from "../../services";
import { useQuery } from "react-query";
import "./style.css";
import Loader from "../Loader";

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

interface Props {
    productId: number;
    onPriceChange?: (price: number) => void; // Define a prop for passing the price to the parent
}

function CartPage({ productId, onPriceChange }: Props) {
    const { data, isLoading, isError } = useQuery(["query-data", productId], () =>
        axiosInstance.get<Prod>(`/products/${productId}`).then(response => response.data)
    );

    if (isLoading) return <div><Loader /></div>;
    if (isError) return <div>Error fetching data</div>;

    // Once data is loaded, pass the price to the parent
    if (data && onPriceChange) { // Add null check for onPriceChange
        onPriceChange(data.price);
    }

    return (
        <div className="page">
            <div className="ppp">
                <img src={data?.image} alt={data?.title} className="pageimg" />
                <span>{data?.title}</span>
                <div className="uuu">
                    <h4>{`Price: ${data?.price}`}</h4>
                </div>
            </div>
            <div className="divider1"></div>
        </div>
    );
}

export default CartPage;
