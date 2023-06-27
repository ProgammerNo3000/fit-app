import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";



export const Login = () => {

  const {login , errorMessage} = useContext(AuthContext);
  const [username, setUsername] = useState("Omar.Sayed");
  const [password, setPassword] = useState("password");

  const handleChange = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    }

    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    login(username, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <header>
        <h1>Login</h1>
      </header>
      <p>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
      </p>
      <button type="submit">Login</button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};
