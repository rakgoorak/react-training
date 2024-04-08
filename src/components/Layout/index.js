import { Link, Outlet } from "react-router-dom";
import "./layout.scss";

function Layout() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="navbar-menu-item">
            <Link to={"/home"}>Home</Link>
          </div>
          <div className="navbar-menu-item">
            <Link to={"/login"}>Login</Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
