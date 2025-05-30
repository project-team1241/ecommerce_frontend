import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import LogoComponent from "../components/LogoComponent";
import { validatesignin } from "../Utils/validate";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";


function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  //All form data
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  // const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  //checkPassword
  const [cnfPassword, setCnfPassword] = useState("");
  const [isValidPass, setIsValidPass] = useState(false);

  const RegisterUser = () => {
    const validateValue = validatesignin(email, password, fullName);
    if (validateValue) {
      toast.error(validateValue);
      return;
    } else {
      Register();
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

  const Register = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://grumpy-termite-stamphub-31a22ab5.koyeb.app/v1/register",
        {
          userEmailId: email,
          userName: fullName,
          userPassword: password,
        }
      );
      if (response.status === 201) {
        toast.success("Account Created Susscefully");
        navigate("/login");
      } else {
        toast.error("Registration failed due to status mismatch");
      }
    } catch (error) {
      if (error.response.status === 500) {
        toast.error("Something went wrong. Try again later.", {
          duration: 1800,
        });
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className=" flex items-center justify-center bg-slate-100 py-12 pt-28">
      <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-10 bg-white p-10 rounded-lg shadow-lg">
        {/*logo*/}
        <LogoComponent width="w-[350px]" height="h-[500px]" />

        {/* Input Fields Section */}
        <form className="w-full md:w-6/12" onSubmit={(e) => e.preventDefault()}>
          {/* Email Input */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Register
          </h2>
          {/* Full name Input */}
          <div className="w-full mb-6 relative hover:cursor-text">
            <input
              type="text"
              id="Full Name"
              className="peer w-full bg-transparent border-b-2 border-gray-300 text-gray-900 text-sm rounded-none focus:outline-none focus:border-blue-600 block p-2.5 pl-10 placeholder-transparent"
              placeholder="First Last name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <label
              htmlFor="Full Name"
              className="absolute left-10 text-sm text-gray-500 pointer-events-none transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 peer-valid:top-0 peer-valid:text-xs peer-valid:text-blue-600 hover:cursor-text placeholder-transparent"
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
              className="absolute left-10 text-sm text-gray-500 pointer-events-none transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 peer-valid:top-0 peer-valid:text-xs peer-valid:text-blue-600 hover:cursor-text"
            >
              Email address
            </label>
          </div>

          {/* Phone Number input */}
          {/* <div className="w-full mb-6 relative hover:cursor-text">
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
                            className="absolute left-10 text-sm text-gray-500 pointer-events-none transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 peer-valid:top-0 peer-valid:text-xs peer-valid:text-blue-600 hover:cursor-text"
                        >
                            Phone Number
                        </label>
                    </div> */}

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
              className="absolute left-10 text-sm text-gray-500 pointer-events-none transition-all duration-200 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 peer-valid:top-0 peer-valid:text-xs peer-valid:text-blue-600 hover:cursor-text"
            >
              Confirm password
            </label>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="rememberMe"
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-900">
              Remember me
            </label>
          </div>

          {/* Register Button */}
          <button
            onClick={() => {
              RegisterUser();
            }}
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            {loading ? (
              <p className="flex justify-center items-center">
                <Spinner loading={loading} color={"#fff"} size={20} />{" "}
                <span>Signing up...</span>
              </p>
            ) : (
              "Register"
            )}
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
