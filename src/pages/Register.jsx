import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import LogoComponent from "../components/LogoComponent";
import { validate } from "../Utils/validate";
import { Link } from "react-router-dom";

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    //error message
    const [errorMessage, setErrorMessage] = useState(null);

    //All form data
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    //checkPassword
    const [cnfPassword, setCnfPassword] = useState("");
    const [isValidPass, setIsValidPass] = useState(false);

    const Register = () => {
        const validateValue = validate(email, password, phone);
        if (validateValue) {
            setErrorMessage(validateValue);
            return;
        } else {
            //   auth validation code
            navigate("/");
        }
    };

    const validatePassword = () => {
        if (cnfPassword === password) {
            setIsValidPass(true);
        }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Toggle Remember Me checkbox
    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };
    return (
        <div className=" flex items-center justify-center bg-slate-100 py-12 pt-28">
            <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-10 bg-white p-10 rounded-lg shadow-lg">
                {/*logo*/}
                <LogoComponent width="w-[350px]" height="h-[500px]" />

                {/* Input Fields Section */}
                <form className="w-full md:w-6/12" onSubmit={(e) => e.preventDefault()}>
                    {/* Email Input */}
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Register</h2>
                    {/* Full name Input */}
                    <div className="w-full mb-6 relative hover:cursor-text">
                        <input
                            type="text"
                            id="Full Name"
                            className="peer w-full bg-transparent border-b-2 border-gray-300 text-gray-900 text-sm rounded-none focus:outline-none focus:border-blue-600 block p-2.5 pl-10 placeholder-transparent "
                            placeholder="First Last name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <label
                            htmlFor="Full Name"
                            className="absolute left-10 text-sm text-gray-500 transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 peer-valid:top-0 peer-valid:text-xs peer-valid:text-blue-600 hover:cursor-text"
                        >
                            Full Name
                        </label>
                    </div>
                    <div className="w-full mb-6 relative hover:cursor-text">
                        <input
                            type="text"
                            id="email"
                            className="peer w-full bg-transparent border-b-2 border-gray-300 text-gray-900 text-sm rounded-none focus:outline-none focus:border-blue-600 block p-2.5 pl-10 placeholder-transparent "
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <label
                            htmlFor="email"
                            className="absolute left-10 text-sm text-gray-500 transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 peer-valid:top-0 peer-valid:text-xs peer-valid:text-blue-600 hover:cursor-text"
                        >
                            Email address
                        </label>
                    </div>

                    {/* Phone Number input */}
                    <div className="w-full mb-6 relative hover:cursor-text">
                        <input
                            type="tel"
                            id="phone"
                            className="peer w-full bg-transparent border-b-2 border-gray-300 text-gray-900 text-sm rounded-none focus:outline-none focus:border-blue-600 block p-2.5 pl-10 placeholder-transparent "
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <label
                            htmlFor="phone"
                            className="absolute left-10 text-sm text-gray-500 transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 peer-valid:top-0 peer-valid:text-xs peer-valid:text-blue-600 hover:cursor-text"
                        >
                            Phone Number
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
                            className="absolute left-10 text-sm text-gray-500 transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 peer-valid:top-0 peer-valid:text-xs peer-valid:text-blue-600 hover:cursor-text"
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

                    {/* Confirm password */}
                    <div className="mb-6 relative hover:cursor-text">
                        <input
                            type="password"
                            id="cnf_password"
                            className="peer w-full bg-transparent border-b-2 border-gray-300 text-gray-900 text-sm rounded-none focus:outline-none focus:border-blue-600 block p-2.5 pl-10 placeholder-transparent "
                            placeholder="Password"
                            value={cnfPassword}
                            onChange={(e) => setCnfPassword(e.target.value)}
                            required
                        />
                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <label
                            htmlFor="cnf_password"
                            className="absolute left-10 text-sm text-gray-500 transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 peer-valid:top-0 peer-valid:text-xs peer-valid:text-blue-600 hover:cursor-text"
                        >
                            Confirm password
                        </label>
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

                    {/* Register Button */}
                    <button
                        onClick={Register}
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-600"
                    >
                        Register
                    </button>

                    {/* Register Link */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link to={"/login"} className="text-blue-600 font-semibold">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
