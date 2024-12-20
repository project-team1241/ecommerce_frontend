import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
    return (
        <div className="border border-gray-200 rounded-2xl">
            <form className="px-2 py-1.5">
                <label htmlFor="input" className="flex felx-row justify-center items-center ">
                    <input
                        type="search"
                        className="w-full h-[20px] px-4 py-2 text-gray-700 rounded-lg focus:outline-none"
                        placeholder="search a product"
                    />
                    <button className="flex flex-row justify-center items-center bg-blue-600 h-7 w-8 p-1 rounded-2xl">
                        <FaSearch className="text-white" />
                    </button>
                </label>
            </form>
        </div>
    );
}

export default Search;
