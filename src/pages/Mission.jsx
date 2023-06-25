import React from "react";
import { useNavigate } from "react-router-dom";

export const Mission = () => {
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/login");

  return (
    <div>
      <button type="button" onClick={handleOnClick}>
        Start
      </button>
      <p>
        Regular physical activity has been shown to impact stress reduction and
        mood improvement positively. Engaging in exercise stimulates the release
        of endorphins, the body's natural "feel-good" hormones, which can help
        alleviate stress and promote well-being.
      </p>
    </div>
  );
};
