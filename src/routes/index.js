import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NoMatch404 from "../pages/NotFound";
import Login from "../pages/Login";
import Layout from "../components/Layout";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch404 />} />
      </Route>
    </Routes>
  );
}

export default Router;
