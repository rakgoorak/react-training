import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "../components/Layout"
import Login from "../pages/Login"
import Home from "../pages/Home"
import NoMatch404 from "../pages/NoMatch404"
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Profile from "../pages/Profile";
import { useAuth } from "../context/AuthProvider";

function Router() {
  const { isLogin } = useAuth();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={isLogin ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={isLogin ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={isLogin ? <Profile /> : <Navigate to="/login" />} />
        <Route path="*" element={<NoMatch404 />} />
      </Route>
    </Routes>
  );
}

export default Router;
