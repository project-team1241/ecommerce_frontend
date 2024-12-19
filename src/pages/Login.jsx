import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import LogoComponent from "../components/LogoComponent";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Toggle Remember Me checkbox
    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className="w-screen flex items-center justify-center bg-slate-100 py-12">
            <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-10 bg-white p-10 rounded-lg shadow-lg">
                {/*logo*/}
                <LogoComponent width="w-[320px]" height="h-[340px]" />

                {/* Input Fields Section */}
                <form className="w-full md:w-6/12">
                    {/* Email Input */}
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Login</h2>
                    <div className="w-full mb-6 relative hover:cursor-text">
                        <input
                            type="email"
                            id="email"
                            className="peer w-full bg-transparent border-b-2 border-gray-300 text-gray-900 text-sm rounded-none focus:outline-none focus:border-green-500 block p-2.5 pl-10 placeholder-transparent "
                            placeholder="Email address"
                            required
                        />
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <label
                            htmlFor="email"
                            className="absolute left-10 text-sm text-gray-500 transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-green-500 peer-valid:top-0 peer-valid:text-xs peer-valid:text-green-500 hover:cursor-text"
                        >
                            Email address
                        </label>
                    </div>

                    {/* Password Input */}
                    <div className="mb-6 relative hover:cursor-text">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="peer w-full bg-transparent border-b-2 border-gray-300 text-gray-900 text-sm rounded-none focus:outline-none focus:border-green-500 block p-2.5 pl-10 placeholder-transparent "
                            placeholder="Password"
                            required
                        />
                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <label
                            htmlFor="password"
                            className="absolute left-10 text-sm text-gray-500 transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-green-500 peer-valid:top-0 peer-valid:text-xs peer-valid:text-green-500 hover:cursor-text"
                        >
                            Password
                        </label>
                        {/* View Password Icon */}
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* Remember Me Checkbox */}
                    <div className="flex items-center mb-6">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                            className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                        />
                        <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    {/* Login Button */}
                    <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-500">
                        Login
                    </button>

                    {/* Register Link */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <a href="/register" className="text-green-500 font-semibold">
                                Register
                            </a>
                        </p>
                    </div>

                    {/* Forgot Password Link */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            <a href="/forgot-password" className="text-green-500 font-semibold">
                                Forgot Password?
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
