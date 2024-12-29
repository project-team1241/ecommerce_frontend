import axios from "axios";
import React, { useEffect, useState } from "react";

function Validate({ token }) {
    const handleGetAllUsers = async () => {
        try {
            const response = await axios.get("https://grumpy-termite-stamphub-31a22ab5.koyeb.app/v1/users", {
                headers: {
                    Authorization: `Bearer ${token}`, // Example for Authorization
                },
            });
            console.log(response.data);
        } catch (error) {
            console.log(error, "Error mowaaaa");
        }
    };
    return (
        <div>
            <button onClick={handleGetAllUsers} className="w-[400px] h-[200px] text-xl">
                Get all users
            </button>
        </div>
    );
}

export default Validate;
