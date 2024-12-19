import React from "react";

function LogoComponent({ width = "w-[436px]", height = "h-[500px]" }) {
    return (
        <div
            className={`hidden md:flex flex-col justify-center items-center ${width} ${height} bg-gradient-to-t from-[#5f3193] via-[#31937C] to-[#D9EFEA] rounded-[4px]`}
        >
            <p className="text-[40px]">Logo</p>
        </div>
    );
}

export default LogoComponent;
