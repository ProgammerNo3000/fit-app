import { useState } from "react";
import { Config } from "../config";

const loginUrl = (username, password) =>
  `${Config.baseUrl}users?username=${username}&password=${password}`;

export const Register = () => {
  const [username, setUsername] = useState("Omar.Sayed");
  const [password, setPassword] = useState("password");
  const [errorMessage, setErrorMessage] = useState("");

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

    const getUserId = await fetch(loginUrl(username, password));
    const result = await getUserId.json();

    setErrorMessage(
      result.length === 0 ? "Invaild Username or Password" : "Login Success"
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <header>
        <h1>Register</h1>
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
      <button type="submit">Register</button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};
