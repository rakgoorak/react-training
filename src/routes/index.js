import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import NoMatch404 from "../pages/NoMatch404";

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/about" element={<About />} />
        <Route exact path="/animal" element={<Animal />} />
        <Route path="/animal/detail/:name" element={<AnimalDetail />} />
        <Route path="/profile" element={isLogin ? <Profile /> : <Navigate to="/login" />} /> */}
      <Route path="*" element={<NoMatch404 />} />
    </Routes>
  );
}

export default Router;
