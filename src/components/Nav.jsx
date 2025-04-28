import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import ProfileDropdown from "./ProfileDropdown";
import { Link, Navigate } from "react-router-dom";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Utils/api/AuthContext";
import LogoUrl from "/src/assets/Logo.png";

const Nav = () => {
    const [ordersCart, setOrdersCart] = useState(0);
    const { isUserLogin } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        setOrdersCart(0);
    }, []);

    return (
        <div className="fixed grid grid-cols-3 place-items-center px-5 bg-[#ffffff] text-gray-900 h-[60px] rouded-b-[5px] shadow-lg  w-screen z-10">
            <div
                onClick={() => navigate("/")}
                className="h-[60px] w-[60px] scale-[1.8] object-contain relative mx-5"
            >
                <img className="h-full w-full" src={LogoUrl} alt="logo" />
            </div>
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
                {isUserLogin ? (
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
