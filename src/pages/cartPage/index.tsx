import React from "react";
import axiosInstance from "../../services";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Cards from "../../components/Cards";
import "./style.css"

function Cart() {
    const { id } = useParams()
    const fetchApi = async () => {
        const responce = await axiosInstance.get(`/carts/${1}`)
        return responce.data;
    }
    const { data } = useQuery(["cart-data"], fetchApi)
    const arr = data?.products
    let price = 188.24
    return (
        <div className="kkk">
            <div className="rrr">
                <Cards data={arr} />
            </div>
            <div className="ddd">
                <div className="fff">
                    <h4>Totalprice</h4>
                    <h4>{price}</h4>
                </div>
            </div>
        </div>
    )
}
export default Cart