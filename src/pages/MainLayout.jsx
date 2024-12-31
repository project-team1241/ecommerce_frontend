import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="w-[100%] grid grid-rows-[100vh, auto]">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
