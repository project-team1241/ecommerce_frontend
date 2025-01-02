import React from "react";
import AddressInput from "./AddressInput";

const AddressModel = () => {
    return (
        <div className="absolute top-20 z-20 grid grid-rows-[30%, auto] place-items-center left-[50] bg-blue-50 w-[40%] h-[60%]">
            <h1 className="text-2xl font-[900] h-[20%]">Address</h1>
            <form action="POST" className="grid grid-rows-7 h-[80%] place-items-center">
                <AddressInput value={"Name"} isRequired={true} />
                <AddressInput value={"houseNumber"} isRequired={true} />
                <AddressInput value={"streetName"} isRequired={true} />
                <AddressInput value={"landmark"} isRequired={true} />
                <AddressInput value={"city"} isRequired={true} />
                <AddressInput value={"pincode"} isRequired={true} />
                <AddressInput value={"phoneNumber"} isRequired={true} />
                <div className="flex flex-row justify-center items-center">
                    <button className="flex flex-row justify-center items-center rounded-lg bg-blue-600 text-white px-4 py-2 mx-2">
                        Submit
                    </button>
                    <button className="flex flex-row justify-center items-center rounded-lg bg-red-400 text-white px-4 py-2 mx-2">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddressModel;
