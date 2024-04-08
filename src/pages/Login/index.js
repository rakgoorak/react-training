import { useState } from "react";
import { PROFILE_LIST } from "../../mockData/loginProfile";
import { useAuth } from "../../context/AuthProvider";

function Login() {
  const { onLogin } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    passwoed: "",
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
    // const profile = PROFILE_LIST.find(
    //   (f) => f.email === formData.email && f.password === formData.password
    // );

    // if (!profile) {
    //   return alert("login fail");
    // }
    // alert("login success");
    // else set "profile" to provider
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <label>email</label>
            <input name="email" />
          </div>
          <div>
            <label>password</label>
            <input name="password" />
          </div>
          <div>
            <button type="submit">login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
