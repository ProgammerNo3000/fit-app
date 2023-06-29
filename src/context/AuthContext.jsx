import { createContext, useState } from "react";
import { Config } from "../config";

const loginUrl = (username, password) =>
  `${Config.baseUrl}users?username=${username}&password=${password}`;

const userUrl = (userId) => `${Config.baseUrl}users/${userId}`;

export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const login = async (username, password) => {
    const getUserId = await fetch(loginUrl(username, password));
    const result = await getUserId.json();
    if (result.length > 0) {
      setUser(result[0]);
      setErrorMessage(null);
      localStorage.setItem("isLogged", true);
      localStorage.setItem("user", JSON.stringify(result[0]));
    //   console.log(result[0]);
    } else {
      setUser(null);
      setErrorMessage("Invaild Username or Password");
      localStorage.setItem("isLogged", false);
      localStorage.setItem("user", null);
    }
  };

  const signout = () => {
    setUser(null);
    localStorage.setItem("isLogged", false);
    localStorage.setItem("user", null);
  };

  const updateExcercises = async (excercisesId) => {
    const isExcerciseExist = user.excercises?.includes(excercisesId);
    let newUser = {};
    if (isExcerciseExist) {
      newUser = {
        ...user,
        excercises: user.excercises.filter((item) => item !== excercisesId),
      };
    } else {
      newUser = {
        ...user,
     excercises: user.excercises?[...user.excercises, excercisesId] : [excercisesId],
      };
    }
    
    const getUserId = await fetch(userUrl(user.id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const resultUser = await getUserId.json();
    setUser(resultUser);
  };

  return (
    <AuthContext.Provider value={{ user, login, signout, errorMessage , updateExcercises}}>
      {children}
    </AuthContext.Provider>
  );
};
