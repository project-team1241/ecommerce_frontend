import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import LogoComponent from "../components/LogoComponent";
import { validate } from "../Utils/validate";
import Validate from "../components/Validate";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
    const [emailPhone, setEmailPhone] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    // const signIn = () => {
    //     const validateValue = validate(emailPhone, password);
    //     if (validateValue) {
    //         navigate("/");
    //     } else {
    //         //   auth validation code
    //         setErrorMessage(validateValue);
    //         return;
    //     }
    // };
    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Toggle Remember Me checkbox
    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const LoginUser = async () => {
        try {
            const response = await axios.post("https://grumpy-termite-stamphub-31a22ab5.koyeb.app/v1/login", {
                userEmailId: emailPhone,
                userPassword: password,
            });
            setToken(response.data.Token);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-screen flex items-center justify-center bg-slate-100 py-12 pt-28">
            <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-10 bg-white p-10 rounded-lg shadow-lg">
                {/*logo*/}
                <LogoComponent width="w-[320px]" height="h-[340px]" />

                {/* Input Fields Section */}
                <form className="w-full md:w-6/12" onSubmit={(e) => e.preventDefault()}>
                    {/* Email Input */}
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Login</h2>
                    {errorMessage && (
                        <div className="flex justify-between items-center py-2 -mt-6 text-sm p-4 bg-red-200 rounded-md border border-red-500 mb-4">
                            <p className="">{errorMessage}</p>{" "}
                            <FaTimes className=" cursor-pointer" onClick={() => setErrorMessage(false)} />
                        </div>
                    )}
                    <div className="w-full mb-6 relative hover:cursor-text">
                        <input
                            type="text"
                            id="email"
                            className="peer w-full bg-transparent border-b-2 border-gray-300 text-gray-900 text-sm rounded-none focus:outline-none focus:border-blue-600 block p-2.5 pl-10 placeholder-transparent "
                            placeholder="Email/Mobile number"
                            required
                            value={emailPhone}
                            onChange={(e) => setEmailPhone(e.target.value)}
                        />
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <label
                            htmlFor="email"
                            className="absolute left-10 text-sm text-gray-500 pointer-events-none transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 peer-valid:top-0 peer-valid:text-xs peer-valid:text-blue-600 hover:cursor-text"
                        >
                            Email/Mobile number
                        </label>
                    </div>
                    {/* Password Input */}
                    <div className="mb-6 relative hover:cursor-text">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="peer w-full bg-transparent border-b-2 border-gray-300 text-gray-900 text-sm rounded-none focus:outline-none focus:border-blue-600 block p-2.5 pl-10 placeholder-transparent "
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <label
                            htmlFor="password"
                            className="absolute left-10 text-sm text-gray-500 pointer-events-none transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 peer-valid:top-0 peer-valid:text-xs peer-valid:text-blue-600 hover:cursor-text"
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
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                        />
                        <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-600"
                        onClick={() => {
                            // signIn();
                            LoginUser();
                        }}
                    >
                        Login
                    </button>

                    {/* Register Link */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <Link to={"/register"} className="text-blue-600 font-semibold cursor-pointer">
                                Register
                            </Link>
                        </p>
                    </div>

                    {/* Forgot Password Link */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            <a href="/forgot-password" className="text-blue-600 font-semibold">
                                Forgot Password?
                            </a>
                        </p>
                    </div>
                </form>
                <Validate token={token}></Validate>
            </div>
        </div>
    );
}

export default Login;
