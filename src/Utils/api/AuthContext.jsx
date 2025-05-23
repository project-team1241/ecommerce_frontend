import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isUserLogin, setIsUserLogin] = useState(false);
    const location = useLocation();

    const checkUserState = async () => {
        const data = JSON.parse(localStorage.getItem("data"));
        const token = data ? data.Token : null;
        if (!token) {
            setIsUserLogin(false);
            return;
        }
        try {
            const response = await axios.get("/user/validate", {
                // assume some validation API
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status === 200) {
                setIsUserLogin(true);
            }
        } catch (error) {
            setIsUserLogin(false);
            localStorage.removeItem("token");
            console.error("Validation failed:", error);
        }
    };

    useEffect(() => {
        checkUserState();
    }, [location]);

    return (
        <AuthContext.Provider value={{ isUserLogin, setIsUserLogin}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
