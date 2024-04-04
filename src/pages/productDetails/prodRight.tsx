import React from "react";
import "./product.style.css"

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

interface ProdRightProps {
    data: Prod;
}

function ProdRight({ data }: ProdRightProps) {
    // const { rating, price, description, category, image, id } = data;



    return (
        <div className="detail-conainer">
            <div className="detail">
                <span className="detail-catagory">{data?.category}</span>
            </div>
            <div className="detail2">
                <span className="detail-title">{data?.title}</span>
            </div>
            <div className="detail3">
                <span className="detail-price">{`Cost: $${data?.price}`}</span>
            </div>
            <div className="rating">
                <div>
                    <span className="detail-rating">{`${data?.rating.rate} *`}</span>
                </div>
                <div>
                    <span className="detail-count">{`reviews ${data?.rating.count}`}</span>
                </div>
            </div>
            <div className="detail4">
                <span className="detail-description">{data?.description}</span>
            </div>
        </div>

    )

}
export default ProdRight;