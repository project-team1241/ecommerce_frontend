import React from "react";
import Button from "../components/Button";
import LogoComponent from "../components/LogoComponent";

function Register() {
    return (
        <div className="grid grid-cols-2 p-[40px]">
            <div>
                <LogoComponent></LogoComponent>
            </div>
            <form action="POST">
                <div className="w-[10px]">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="john.doe@company.com"
                        required
                    />
                </div>
                <Button name={Register} />
            </form>
        </div>
    );
}

export default Register;
