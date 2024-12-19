import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Nav = () => {
    return (
        <div className="fixed bg-[#ffffff] text-gray-900 h-[60px] rouded-b-[5px] shadow-lg hover:text-blue-600 w-screen z-10">
            <h2>Logo</h2>
            <div>
                <FaCartShopping></FaCartShopping>
            </div>
        </div>
    );

};

export default Nav;
