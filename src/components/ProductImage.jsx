import React from "react";
import RatingComponent from "./RatingComponent";

function ProductImage({ data }) {
    return (
        <div className="relative grid grid-rows-[70%, 15%, 15%] md:w-60 h-70 w-44  bg-slate-50 md:p-3 p-2 border border-gray-300 rounded-md shadow-lg transform-gpu transition-transform duration-300 hover:scale-105 cursor-pointer">
            {/* Image Container */}
            <div className="flex justify-center items-center w-full h-full overflow-hidden">
                <img
                    src={data.url}
                    alt={data.name}
                    className="w-full h-full object-contain mb-2"
                />
            </div>

            {/* Product Info */}
            <div
                className="text-center text-sm font-medium truncate"
                title={`${data.brand} | ${data.name}`} // Tooltip for full product info
            >
                {data.brand} | {data.name}
            </div>

            {/* Rating and Reviews */}
            <div className="flex justify-center items-center text-xs space-x-1 md:space-x-2">
                <RatingComponent rating={data.rating} />
                <span className="text-gray-900 text-xs md:text-sm">({data.rating})</span>
                <span className="text-xs">{data.reviews} reviews</span>
            </div>
        </div>
    );
}

export default ProductImage;
