import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import NoMatch404 from "../pages/NotFound";
import Login from "../pages/Login";
import AboutEffect from "../pages/AboutEffect";
import LayoutV2 from "../components/Layout/layoutV2";
import Animal from "../pages/Animal";
import AnimalDetail from "../pages/Animal/AnimalDetail";
import Product from "../pages/Product/product";

function Router() {
  return (
    <Routes>
      {/* <Route element={<Layout />}></Route> */}
      <Route
        path="/"
        element={
          <LayoutV2>
            <Home />
          </LayoutV2>
        }
      />
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
      <Route
        exact
        path="/animal"
        element={
          <LayoutV2>
            <Animal />
          </LayoutV2>
        }
      />
      <Route
        path="/animal/detail/:name"
        element={
          <LayoutV2>
            <AnimalDetail />
          </LayoutV2>
        }
      />
      <Route
        path="/producttable"
        element={
          <LayoutV2>
            <Product />
          </LayoutV2>
        }
      />
      <Route path="*" element={<NoMatch404 />} />
      {/* </Route> */}
    </Routes>
  );
}

export default Router;