import React from "react";
import { useNavigate } from "react-router-dom";
import './Mission.css'


export const Mission = () => {
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/login");

  return (
    <div>
      <button type="button" onClick={handleOnClick}>
        Start
      </button>
      <p>Tough times don’t last but tough people do – Robert H. Schuller.</p>
      <p>
        Regular physical activity has been shown to impact stress reduction and
        mood improvement positively. Engaging in exercise stimulates the release
        of endorphins, the body's natural "feel-good" hormones, which can help
        alleviate stress and promote well-being.   

        <img className="missionimg" src="https://th.bing.com/th/id/R.0c8ccee97ae804e1520e04fea39f8c0d?rik=mlSWkxb6p6IyNQ&riu=http%3a%2f%2fbottletopmedia.com%2fwp-content%2fuploads%2f2018%2f02%2four-mission.jpg&ehk=0uL9Z5yuhK2TWab%2fDFHQVsKejnOjUlkDzxf89yagxjY%3d&risl=&pid=ImgRaw&r=0.jpg" alt="mission
        " ></img>
      </p>
      
    </div>
  );
};
