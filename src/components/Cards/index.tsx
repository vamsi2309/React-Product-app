import React from "react";
import CartPage from "./cardPages";
import "./style.css"

interface Data {
    productId: number;
    quantity: number;
}

interface Super {
    data: Data[];
}

function Cards({ data }: Super) {

    return (
        <div className="sri">
            {data?.map((item, index) => {
                console.log("Item:", item);
                return <CartPage productId={item.productId} key={index} />;
            })}
        </div>
    );
}

export default Cards;
