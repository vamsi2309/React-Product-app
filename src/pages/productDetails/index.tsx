import React, { useEffect } from "react";
import axiosInstance from "../../services";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import "./product.style.css"
import ProdRight from "./prodRight";


function DetailsPage() {
    const { id } = useParams();

    const getApi = async () => {
        const response = await axiosInstance.get(`products/${id}`)
        return response.data;
    }

    const { data } = useQuery(["fetch-prod"], getApi);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on route change
    }, [id]);

    return (

        <div className="prod-container">

            <div className="prod-grid">
                <div className="image">
                    <img src={data?.image} alt={data?.title} className="prod-img" />
                    <div className="btn-parent">
                        <button>Add to cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
                <div className="divider"></div>
                <div>
                    <ProdRight data={data} />
                </div>
            </div>

        </div>
    )
}
export default DetailsPage;