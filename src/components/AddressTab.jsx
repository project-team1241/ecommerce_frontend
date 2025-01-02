import React, { useRef, useState, useEffect } from "react";
import { UserAddress } from "../Utils/Constants";
import Address from "./Address";
import AddressModel from "./AddressModel";

const AddressTab = () => {
    const [addressInput, setAddressInput] = useState(false);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            {addressInput && <AddressModel />}
            <div className="flex flex-row justify-center items-center">
                <button
                    onClick={() => setAddressInput(!addressInput)}
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
                        setAddressInput={setAddressInput}
                        addressInput={addressInput}
                    />
                ))}
            </div>
        </div>
    );
};

export default AddressTab;
