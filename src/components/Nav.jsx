import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import ProfileDropdown from "./ProfileDropdown";
import Search from "./Search";

const Nav = () => {
    const [ordersCart, setOrdersCart] = useState(0);
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        setOrdersCart(0);
    }, []);

    return (
        <div className="fixed grid grid-cols-3 place-items-center px-20 bg-[#ffffff] text-gray-900 h-[60px] rouded-b-[5px] shadow-lg  w-screen z-10">
            <h2 className="cursor-pointer">Logo</h2>
            <Search />
            <div className="grid grid-cols-2 place-items-center">
                <div className="h-[30px] w-[30px] relative z-11">
                    <FaCartShopping className="h-[100%] w-[100%] self-center hover:text-blue-600 cursor-pointer"></FaCartShopping>
                    <div
                        className={` ${
                            ordersCart > 0 ? "" : "hidden"
                        } absolute top-0 right-0 w-[15px] h-[15px] bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center`}
                    >
                        2
                    </div>
                </div>
                {isLogin ? (
                    <ProfileDropdown />
                ) : (
                    <button className="w-full h-[50px] px-5 py-2 bg-blue-600 text-white rounded-lg">Login</button>
                )}
            </div>
        </div>
    );
};

export default Nav;
