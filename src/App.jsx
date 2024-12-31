import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//File Imports
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./pages/MainLayout";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="profile" element={<Profile />} />
                <Route path="cart" element={<Cart />} />
            </Route>
        </Routes>
    </Router>
);

export default App;
