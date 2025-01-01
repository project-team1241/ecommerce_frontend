import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import ProfileDropdown from "./ProfileDropdown";
import { Navigate } from "react-router-dom";
import Search from "./Search";
import { Link } from "react-router-dom";

const Nav = () => {
    const [ordersCart, setOrdersCart] = useState(0);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        setOrdersCart(0);
    }, []);

    return (
        <div className="fixed grid grid-cols-3 place-items-center px-5 bg-[#ffffff] text-gray-900 h-[60px] rouded-b-[5px] shadow-lg  w-screen z-10">
            <Link to={"/"}>
                <h2 className="cursor-pointer">Logo</h2>
            </Link>
            <Search />
            <div className="grid grid-cols-2 place-items-center">
                <div className="h-[30px] w-[30px] relative mx-5">
                    <FaCartShopping className="h-[100%] w-[100%] mr-10 self-center hover:text-blue-600 cursor-pointer"></FaCartShopping>
                    <div
                        className={` ${
                            ordersCart > 0 ? "" : "hidden"
                        } absolute top-0 right-0 w-[15px] h-[15px] bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center`}
                    >
                        2
                    </div>
                </div>
               {!isLogin ? (
                    <ProfileDropdown />
                ) : (
                    <Link to={"/login"}>
                        <button className="flex flex-row justify-center items-center w-full h-10 px-5 py-2 text-gray-900 rounded-lgz">
                            Login
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Nav;
