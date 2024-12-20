import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
    return (
        <div>
            <form>
                <label htmlFor="search" className="flex felx-row justify-center items-center ">
                    <input
                        type="search"
                        className="w-full h-[50px] px-4 py-2 text-gray-700 focus:outline-none"
                        placeholder="search a product"
                    />
                    <button>
                        <FaSearch />
                    </button>
                </label>
            </form>
        </div>
    );
}

export default Search;
