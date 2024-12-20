import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import ProfileDropdown from "./ProfileDropdown";
import Search from "./Search";

const Nav = () => {
    const [ordersCart, setOrdersCart] = useState(0);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        setOrdersCart(2);
    }, []);

    return (
        <div className="fixed grid grid-cols-4 place-items-center bg-[#ffffff] text-gray-900 h-[60px] rouded-b-[5px] shadow-lg hover:text-blue-600 w-screen z-10">
            <h2>Logo</h2>
            <Search />
            <div className="h-[40px] w-[40px] relative z-11">
                <FaCartShopping className="h-[100%] w-[100%] self-center"></FaCartShopping>
                <div
                    className={`absolute top-0 right-0 w-[20px] h-[20px] bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center`}
                >
                    {ordersCart}
                </div>
            </div>
            {isLogin ? <ProfileDropdown /> : <button>Login</button>}
        </div>
    );
};

export default Nav;
