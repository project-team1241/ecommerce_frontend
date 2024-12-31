import React from "react";
import RatingComponent from "./RatingComponent";

function ProductImage({ data }) {
    return (
        <div className="grid grid-rows-[80%, 20%, 20%] w-[60%] self-center place-items-center h-[100%] bg-blue-500 text-white p-2 border border-blue-400 border-5 drop-shadow-product-card rounded-lg">
            <div className="flex flex-row justify-center items-center w-[80%] h-[100%]">
                <img src={data.url} alt={data.name} />
            </div>
            <div className="text-l">
                <p>
                    {data.brand} <span>|</span>
                    {data.name}
                </p>
            </div>
            <div className="flex flex-row justify-start items-center text-sm">
                <RatingComponent rating={data.rating} /> <span>({data.rating}) </span>{" "}
                <span>{data.reviews} reviews</span>
            </div>
        </div>
    );
}

export default ProductImage;
