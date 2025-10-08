import React from "react";
import Nav from "../components/Nav";
import Footer from "/src/components/Footer/Footer.jsx";
import { AuthProvider } from "../Utils/api/AuthContext";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="w-[100%] grid grid-rows-[100vh, auto]">
            <AuthProvider>
                <Nav />
            </AuthProvider>
            <div className="mt-16"><Outlet /></div>
            <Toaster
                className="top-[180px]"
                toastOptions={{
                    // default options
                    duration: 1800,
                    style: {
                        background: "#363636",
                        color: "#fff",
                        top: "50px",
                    },
                }}
                position="top-right"
            />
            <Footer />
        </div>
    );
};

export default MainLayout;
//
