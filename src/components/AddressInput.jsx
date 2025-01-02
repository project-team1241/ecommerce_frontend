import React from "react";

function AddressInput({ value, isRequired, type, label }) {
    return (
        <div className="w-full mb-6 relative hover:cursor-text">
            <input
                type={type}
                id={value}
                className="peer w-full bg-transparent border-b-2 border-gray-300 text-gray-900 text-sm rounded-none focus:outline-none focus:border-blue-600 block p-2.5 pl-10 placeholder-transparent "
                placeholder={value}
                required={isRequired}
            />
            <label
                htmlFor={value}
                className="absolute left-10 text-sm text-gray-500 pointer-events-none transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 peer-valid:top-0 peer-valid:text-xs peer-valid:text-blue-600 hover:cursor-text"
            >
                {value}
            </label>
        </div>
    );
}

export default AddressInput;
