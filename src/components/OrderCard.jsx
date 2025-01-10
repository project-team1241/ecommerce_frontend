import React, { useState } from "react";
import { FaTimesCircle, FaTruck, FaStar } from "react-icons/fa";

const OrderCard = ({
  product,
  delivery,
  price,
  status
}) => {
  const [rating, setRating] = useState(0);

  const isDelivered = status === "Delivered";
  const handleRating = (rate) => {
    setRating(rate); 
  };

  return (
    <div className="w-full flex flex-col md:flex-row bg-white rounded-lg shadow-md mb-4 border p-5 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col md:flex-row w-full md:w-6/12 mb-6 md:mb-0">
        <img
          src={product.imageUrl}
          alt="product"
          className="w-3/12 h-auto rounded-lg mb-4 md:mb-0 md:mr-6 transition-transform duration-300 hover:scale-105"
        />
        <div className="text-sm md:text-base">
          <h1 className="text-xl font-semibold mb-2">{product.brand} | <span>{product.model}</span></h1>
          <p className="mb-2 text-gray-600">{product.description}</p>
          <p className="text-sm text-gray-500">Expected delivery date: <span className="font-semibold">{delivery.date}</span></p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-6/12">
        <div className="w-full md:w-8/12 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Delivery Address</h2>
          <ul className="text-sm space-y-1 text-gray-700">
            <li><span className="font-semibold">House No:</span> {delivery.houseNumber}</li>
            <li><span className="font-semibold">Street Name:</span> {delivery.streetName}</li>
            <li><span className="font-semibold">City:</span> {delivery.city}</li>
            <li><span className="font-semibold">Landmark:</span> {delivery.landmark}</li>
            <li><span className="font-semibold">Postal Code:</span> {delivery.postalCode}</li>
            <li><span className="font-semibold">Phone:</span> {delivery.phoneNumber}</li>
          </ul>
        </div>

        <div className="w-full md:w-4/12">
          <h2 className="text-lg font-semibold mb-3">Price: <span className="text-green-600">₹{price}</span></h2>
          <button
            className={`w-full py-3 rounded-md mt-4 flex items-center justify-center transition-all duration-200 ${isDelivered ? 'bg-gray-400 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            {isDelivered ? (
              <>
                <FaTruck className="mr-2" />
                Return
              </>
            ) : (
              <>
                <FaTruck className="mr-2" />
                Track Order
              </>
            )}
          </button>
          <button
            className={`w-full py-3 rounded-md mt-4 flex items-center justify-center transition-all duration-200 ${isDelivered ? 'bg-transparent text-yellow-500' : 'border border-1 border-red-500 text-red-500 hover:bg-red-100'}`}
          >
            {isDelivered ? (
              <>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-300'} hover:text-yellow-400`}
                      onClick={() => handleRating(star)}
                    />
                  ))}
                </div>
              </>
            ) : (
              <>
                <FaTimesCircle className="mr-2" />
                Cancel Order
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

