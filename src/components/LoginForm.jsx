import { useNavigate } from "react-router";
import useForm from "../hooks/formHooks";
import { useAuthentication } from "../hooks/apiHooks";

const LoginForm = () => {
  const navigate = useNavigate();
  const { postLogin } = useAuthentication();

  const initValues = {
    username: "",
    password: "",
  };

  const doLogin = async () => {
    try {
      const result = await postLogin(inputs);
      console.log("LOGIN RESULT:", result);
      // Save token to localStorage
      if (result.token) {
        localStorage.setItem("token", result.token);
        // Redirect to Home
        navigate("/");
      }
    } catch (error) {
      console.log("LOGIN ERROR:", error);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doLogin,
    initValues,
  );

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
