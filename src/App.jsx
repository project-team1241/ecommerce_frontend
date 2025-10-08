import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//File Imports
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./pages/MainLayout";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails.jsx";
import { AuthProvider } from "./Utils/api/AuthContext";
const App = () => (
  <Router>
    <AuthProvider>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<ProductDetails />}/>
      </Route>
    </Routes>
    </AuthProvider>
  </Router>
);

export default App;
