import React from "react";
import AddressInput from "./AddressInput";
import { useAddressContext } from "../Utils/api/AddressContext";

const AddressModel = () => {
    const { isAddressModelVisible, setIsAddressModelVisible, editAddress } = useAddressContext();

    const handleSubmitButton = () => {
        setIsAddressModelVisible(!isAddressModelVisible);
    };

    return (
        <div
            className={`fixed top-20 z-20 grid grid-rows-[30%, auto] place-items-center left-[50] rounded-xl bg-blue-50 w-[40%] h-[60%] 
            transition-all duration-800 transform ${
                isAddressModelVisible ? "opacity-100 scale-100" : "opacity-0 scale-60"
            }`}
        >
            <h1 className="text-2xl font-[900] h-[20%]">Address</h1>
            <form action="POST" className="grid grid-rows-4 h-[80%] place-items-center">
                <AddressInput value={"Full Name(John Doe)"} editValue={editAddress.name} isRequired={true} />
                <div className="grid grid-cols-2 gap-4">
                    <AddressInput value={"House Number"} editValue={editAddress.houseNumber} isRequired={true} />
                    <AddressInput value={"Street Name"} editValue={editAddress.streetName} isRequired={true} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <AddressInput value={"Landmark"} editValue={editAddress.landmark} isRequired={true} />
                    <AddressInput value={"City"} editValue={editAddress.city} isRequired={true} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <AddressInput value={"Pincode"} editValue={editAddress.pincode} isRequired={true} />
                    <AddressInput value={"Phone Number"} editValue={editAddress.phoneNumber} isRequired={true} />
                </div>
                <div className="flex flex-row justify-center items-center">
                    <button
                        onClick={handleSubmitButton}
                        className="flex flex-row justify-center items-center rounded-lg bg-blue-600 text-white px-4 py-2 mx-2"
                    >
                        Submit
                    </button>
                    <button
                        onClick={() => setIsAddressModelVisible(!isAddressModelVisible)}
                        className="flex flex-row justify-center items-center rounded-lg bg-red-400 text-white px-4 py-2 mx-2"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddressModel;
