import { createContext, useContext, useEffect, useState } from "react";
import { PROFILE_LIST } from "../mockData/loginProfile";

const AuthContext = createContext();

function AuthProvider({ children }) {
  

  const [state, setState] = useState({
    isLogin: false,
    profile: null,
  });
  const authorize = (email, password) => {
    const profile = PROFILE_LIST.find(
      (f) => f.email === email && f.password === password
    );

    if (!profile) {
      // remove localStorage
      localStorage.removeItem("profile");
      return alert("login fail");
    } else {

      localStorage.setItem("profile", JSON.stringify(profile));
      setState({ isLogin:true, profile: profile });
      // set localStorage
      alert("login success");
    }

  };

  const onLogout = () => {
    localStorage.removeItem("profile");
    setState({ isLogin: false, profile: null });
  };

  useEffect(() => {
    const getProfile = localStorage.getItem("profile");
    if (getProfile) {
      // set profile
      const parsedProfile=JSON.parse(getProfile);
      setState({ isLogin: true, profile: parsedProfile });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogin: state.isLogin,
        profile: state.profile,
        onLogin: authorize,
        onLogout: onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};

export { useAuth };

export default AuthProvider;