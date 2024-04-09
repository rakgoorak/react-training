import { createContext, useContext, useEffect, useState } from "react";
import { PROFILE_LIST } from "../mockData/loginProfile";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [state, setState] = useState({
    isLogin: false,
    profile: {},
  });
  const authorize = (email, password) => {
    const profile = PROFILE_LIST.find(
      (f) => f.email === email && f.password === password
    );

    if (!profile) {
      // remove localStorage
      return alert("login fail");
    }

    // set localStorage
    alert("login success");
  };

  const onLogout = () => {};

  useEffect(() => {
    const getProfile = localStorage.getItem("localStorage name");
    if (getProfile) {
      // set profile
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogin: state.isLogin,
        profile: state.profile,
        onLogin: authorize,
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