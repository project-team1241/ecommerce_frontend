import React, { useState } from "react";
import AddressTab from "../components/AddressTab";

const Profile = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const [isSeller, setIsSeller] = useState(false);

    return (
        <div className="w-full h-[auto] flex flex-col justify-center items-center mb-20 md:block md:w-[80%] md:mx-[auto]">
            <div className="p-2 bg-blue-600 text-white w-[90px] flex flex-col justify-center items-center text-xl rounded-md">
                <h1>Profile</h1>
            </div>
            {/* Tab Headers */}
            <div className="flex border-b border-gray-200 mt-20">
                <button
                    className={`px-4 py-2 text-sm font-medium ${
                        activeTab === "tab1" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"
                    }`}
                    onClick={() => setActiveTab("tab1")}
                >
                    Address
                </button>
                <button
                    className={`px-4 py-2 text-sm font-medium ${
                        activeTab === "tab2" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"
                    }`}
                    onClick={() => setActiveTab("tab2")}
                >
                    Orders
                </button>
                {isSeller && (
                    <button
                        className={`px-4 py-2 text-sm font-medium ${
                            activeTab === "tab3" ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"
                        }`}
                        onClick={() => setActiveTab("tab3")}
                    >
                        Products
                    </button>
                )}
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                {activeTab === "tab1" && <AddressTab />}
                {activeTab === "tab2" && <div>Content for Tab 2</div>}
                {activeTab === "tab3" && <div>Content for Tab 3</div>}
            </div>
        </div>
    );
};

export default Profile;
