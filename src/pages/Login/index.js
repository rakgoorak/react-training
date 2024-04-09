import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import "./Login.css";

function Login() {
  const { onLogin } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const allElement = form.elements;
    let formData = {};

    Array.from(allElement).map((item) => {
      if (!item?.name) return;

      formData[item.name] = item.value;
    });

    onLogin(formData.email, formData.password);
  };

  return (
    <div className="login-container">
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <label>Email</label> 
            <input type="text" name="email" placeholder="Enter your email"/> 
          </div>
          <div>
            <label>Password</label> 
            <input type="password" name="password" placeholder="Enter your password"/> 
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
