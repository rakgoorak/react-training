import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout"
import Login from "../pages/Login"
import Home from "../pages/Home"
import NoMatch404 from "../pages/NoMatch404"
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch404 />} />
      </Route>
    </Routes>
  );
}

export default Router;
