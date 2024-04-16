import { Link, Outlet } from "react-router-dom";
import "./layout.css";
import { useAuth } from "../../context/AuthProvider";
import ProfileDropdown from "../ProfileDropdown";

function Layout() {

  const { isLogin }=useAuth()
  return (
    <>
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="navbar-menu-item">
            <Link to={"/home"}>Home</Link>
          </div>
          <div className="navbar-menu-item">
            <Link to={"/dashboard"}>Dashboard</Link>
          </div>
          <div className="navbar-menu-item">
            <Link to={"/about"}>About</Link>
          </div>
          {isLogin && <div className="navbar-menu-item">
            <Link to={"/profile"}>Profile</Link>
          </div>}
          {!isLogin && (
            <div className="navbar-menu-item">
              <Link to={"/login"}>Login</Link>
            </div>
          )}
          {isLogin && <ProfileDropdown />}
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
