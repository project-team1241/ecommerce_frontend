import React, { useRef, useState, useEffect } from "react";
import { UserAddress } from "../../Utils/Constants";
import Address from "./Address";
import AddressModel from "./AddressModel";
import { useAddressContext } from "../../Utils/api/AddressContext";

const AddressTab = () => {
    const { isAddressModelVisible, setIsAddressModelVisible, setEditAddress } =
        useAddressContext();

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            {isAddressModelVisible && <AddressModel />}
            <div className="flex flex-row justify-center items-center">
                <button
                    onClick={() => {
                        setIsAddressModelVisible(true);
                        setEditAddress({});
                    }}
                    className="w-[100%] bg-blue-600 px-4 py-2 text-white rounded-lg"
                >
                    Add Addresss <span className="text-xl">+</span>
                </button>
            </div>
            <div className="flex flex-col justify-center items-center h-[100%] w-full md:flex md:flex-col md:justify-start md:items-start">
                {UserAddress.map((address) => (
                    <Address
                        key={address.houseNumber + "_key"}
                        oneAddress={address}
                    />
                ))}
            </div>
        </div>
    );
};

export default AddressTab;
