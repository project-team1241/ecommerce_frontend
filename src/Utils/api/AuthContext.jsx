import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isUserLogin, setIsUserLogin] = useState(false);

    const checkUserState = async () => {
        const token = localStorage.getItem("token");
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
    }, []);

    return (
        <AuthContext.Provider value={{ isUserLogin, setIsUserLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
