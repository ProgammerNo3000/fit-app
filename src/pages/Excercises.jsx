import React, { useContext, useEffect, useState } from "react";
import { Config } from "../config";
import "./Excercises.css";
import { AuthContext } from "../context/AuthContext";

const excercisesUrl = `${Config.baseUrl}excercises`;

export const Excercises = () => {
  const { user, updateExcercises } = useContext(AuthContext);
  const [excercises, setExercises] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const loadExcersises = async () => {
      const getUserId = await fetch(excercisesUrl);
      const excercisesList = await getUserId.json();
      setExercises([...excercisesList]);
    };

    if(user){
      loadExcersises();
    }
  }, [user]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setExercises([...excercises, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleCompletedExcercise = (index) => {
    updateExcercises(index);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title"> Excercises</h1>
      <ul className="todo-list">
        {user  &&
          excercises.map((excercis) => (
            <li
              key={excercis.id}
              className={`todo-item ${
                user.excercises?.includes(excercis.id) ? "completed" : ""
              }`}
            >
              <span className="todo-text">
                {`${excercis.exercise}: ${excercis.reps}`}
              </span>
              <button
                onClick={() => handleCompletedExcercise(excercis.id)}
                className="delete-button"
              >
                {user.excercises?.includes(excercis.id) ? "Undo" : "Completed"}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Excercises;
