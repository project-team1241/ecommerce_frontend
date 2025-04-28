import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//File Imports
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./pages/MainLayout";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import { AuthProvider } from "./Utils/api/AuthContext";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route
                    path="profile"
                    element={
                        <AuthProvider>
                            <Profile />
                        </AuthProvider>
                    }
                />
                <Route
                    path="cart"
                    element={
                        <AuthProvider>
                            <Cart />
                        </AuthProvider>
                    }
                />
            </Route>
        </Routes>
    </Router>
);

export default App;
