import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="w-screen">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
