import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddressModel from "./AddressModel";
import { useAddressContext } from "../Utils/api/AddressContext";

const Address = ({ oneAddress }) => {
    const { setEditAddress, isAddressModelVisible, setIsAddressModelVisible } = useAddressContext();

    const handleEditClick = () => {
        setIsAddressModelVisible(!isAddressModelVisible);
        setEditAddress(oneAddress);
    };

    const handleDeleteClick = () => {};

    return (
        <div className="flex flex-row justify-between items-center flex-wrap w-full mt-2 h-[auto] p-6">
            <div className="block bg-gray-200 rounded-lg p-6 w-[80%]">
                <div className="w-[100%] h-[auto] flex flex-row justify-start items-start text-2xl py-4 px-6 border border-b-black">
                    <h1>{oneAddress.name}</h1>
                </div>
                <div className="w-[100%] h-[80%] trunicate whitespace-nowrap">
                    <p>
                        House Number: <span>{oneAddress.houseNumber}</span>
                    </p>
                    <p>
                        Street Name: <span>{oneAddress.streetName}</span>
                    </p>
                    <p>
                        City: <span>{oneAddress.city}</span>
                    </p>
                    <p>
                        Landmark: <span>{oneAddress.landmark}</span>
                    </p>
                    <p>
                        Pincode: <span>{oneAddress.pincode}</span>
                    </p>
                    <p>
                        Phone Number: <span>{oneAddress.phoneNumber}</span>
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-evenly items-center flex-wrap w-[auto] mt-5">
                <button
                    onClick={handleEditClick}
                    className="flex flex-row justify-center items-center rounded-lg bg-blue-600 text-white px-4 py-2 mx-2"
                >
                    <FaEdit className="mx-2" />
                    Edit
                </button>
                <button
                    onClick={handleDeleteClick}
                    className="flex flex-row justify-center items-center rounded-lg bg-red-400 text-white px-4 py-2 mx-2"
                >
                    <FaTrash className="mx-2" />
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Address;
