import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div>
      About
      <p>
        Physical training has been present in human societies throughout
        history. Usually, it was performed for the purposes of preparing for
        physical competition or display, improving physical, emotional and
        mental health, and looking attractive.
        <img className="about-image" src="https://media.defense.gov/2020/May/07/2002296174/700/700/0/200401-M-BR906-002.JPG" alt="about"></img>
      </p>
      <br></br>
      <p>
        Engaging in exercise helps prevent and manage chronic conditions like
        type 2 diabetes, cardiovascular problems, certain types of cancer, and
        metabolic syndrome. Physical activity improves cardiovascular health,
        reduces blood pressure and cholesterol levels, and enhances insulin
        sensitivity, all contributing to a lower risk of developing these
        diseases. Regular exercise also supports weight management, improves
        immune function, and reduces inflammation, reducing the risk of chronic
        conditions.
      </p>
    </div>
  );
};
