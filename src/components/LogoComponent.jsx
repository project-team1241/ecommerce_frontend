import React from "react";

function LogoComponent({ width = "w-[436px]", height = "h-[500px]" }) {
    return (
        <div className={`${width} ${height} bg-gradient-to-t from-[#31937C] via-[#31937C] to-[#D9EFEA] rounded-[4px]`}></div>
    );
}

export default LogoComponent;
