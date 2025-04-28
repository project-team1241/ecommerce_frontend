import React from "react";
import RatingComponent from "../RatingComponent";

function ProductImage({ data }) {
    return (
        <div className="relative grid grid-rows-[70%_15%_15%] md:w-60 h-[80%] w-44  bg-slate-50 md:p-3 p-2 border border-gray-300 rounded-md shadow-lg transform-gpu transition-transform duration-300 hover:scale-105 cursor-pointer">
            {/* Image Container */}
            <div className="flex justify-center items-center w-full h-full overflow-hidden">
                <img
                    src={data.productMediumImg}
                    alt={data.name}
                    className="w-full h-full object-cover mb-2"
                />
            </div>

            {/* Product Info */}
            <div
                className="text-center text-sm font-medium truncate"
                title={`${data.productBrand} | ${data.productName}`} // Tooltip for full product info
            >
                {data.productBrand} | {data.productName}
            </div>

            {/* Rating and Reviews */}
            <div className="flex justify-center items-center text-xs space-x-1 md:space-x-2">
                <RatingComponent rating={data.productRating} />
                <span className="text-gray-900 text-xs md:text-sm">
                    ({data.productRating})
                </span>
                <span className="text-xs">{data.reviews} reviews</span>
            </div>
        </div>
    );
}

export default ProductImage;
