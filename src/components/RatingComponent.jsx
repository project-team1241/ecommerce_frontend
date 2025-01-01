import React from "react";

function RatingComponent({ rating }) {
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating % 1 !== 0; // Check if there is a half star
    const emptyStars = 5 - Math.ceil(rating);

    return (
        <div>
            {/* Render full stars */}
            {Array(fullStars)
                .fill(0)
                .map((_, index) => (
                    <span key={`full-${index}`} className="text-yellow-500 text-lg">
                        ★
                    </span>
                ))}

            {/* Render half star if needed */}
            {hasHalfStar && <span className="text-gray-900 text-lg">☆{/* Use a half-star icon if preferred */}</span>}

            {/* Render empty stars */}
            {Array(emptyStars)
                .fill(0)
                .map((_, index) => (
                    <span key={`empty-${index}`} className="text-gray-900 text-lg">
                        ★
                    </span>
                ))}
        </div>
    );
}

export default RatingComponent;
