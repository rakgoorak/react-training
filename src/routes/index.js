import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NoMatch404 from "../pages/NotFound";
import Login from "../pages/Login";
import Layout from "../components/Layout";
import AboutEffect from "../pages/AboutEffect";
import LayoutV2 from "../components/Layout/layoutV2";

function Router() {
  return (
    <Routes>
      {/* <Route element={<Layout />}> */}
      <Route path="/" element={<Home />} />
      <Route
        path="/home"
        element={
          <LayoutV2>
            <Home />
          </LayoutV2>
        }
      />
      <Route
        path="/login"
        element={
          <LayoutV2>
            <Login />
          </LayoutV2>
        }
      />
      <Route
        path="/about-effect"
        element={
          <LayoutV2>
            <AboutEffect />
          </LayoutV2>
        }
      />
      <Route path="*" element={<NoMatch404 />} />
      {/* </Route> */}
    </Routes>
  );
}

export default Router;
