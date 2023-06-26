import React from "react";
import { useNavigate } from "react-router-dom";

export const News = () => {
  const navigate = useNavigate();
  const handleSubmit = () => navigate("/login");
  return (
    <>
      <div>
        <h1>NEWS</h1>
        <p>
          Lorem ipsum dolor sit, amet c onsectetur adipisicing elit. Possimus
          laudantium aliquid repudiandae! Aspernatur doloremque at nesciunt
          neque quam vel, adipisci quod voluptates praesentium inventore. Id
          reprehenderit eveniet autem sint culpa?
        </p>
      </div>
      <button onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};
