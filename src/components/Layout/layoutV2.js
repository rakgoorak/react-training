import { Link, Outlet, useNavigate } from "react-router-dom";

import "./layout.scss";

function LayoutV2({ children }) {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="navbar-menu-item">
            <Link to={"/home"}>Home</Link>
          </div>
          <div className="navbar-menu-item">
            <Link to={"/about-effect"}>Effect</Link>
          </div>
          <div className="navbar-menu-item">
            <Link to={"/animal"}>Animal</Link>
          </div>
          <div className="navbar-menu-item">
            <div onClick={() => navigate("/login")} to={"/login"}>
              Login
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}

export default LayoutV2;
