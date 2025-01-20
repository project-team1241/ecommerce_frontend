import React, { useState } from "react";

function AddressInput({ value, editValue, isRequired, type, label }) {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="w-full mb-6 relative hover:cursor-text">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
                {value}
            </label>
            <input
                value={inputValue ? inputValue : editValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-300 dark:placeholder:text-gray-500"
                placeholder={value}
                required={isRequired}
            />
        </div>
    );
}

export default AddressInput;
