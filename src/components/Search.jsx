import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
    return (
        <div>
            <form>
                <label htmlFor="search" className="">
                    <input
                        type="search"
                        class="w-full px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-600 focus:ring-opacity-50"
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
