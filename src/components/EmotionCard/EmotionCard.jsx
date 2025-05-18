import React from "react";
import Button from "../Buttons/Buttons";
import "./EmotionCard.css";
import EmotionsIcon from "../../assets/emotionsIcons/joy_icon.png";

const EmotionCard = ({ title, description, color }) => {
  return (
    <div className="card" style={{ borderColor: color }}>
      <div className="header">
        <h2>{title}</h2>
        <img src={emotionIcon} alt={`${title} icon`} className="JoyIcon" />
      </div>

      <p>{description}</p>

      <div className="image-container">
        <div className="image-box">Img 1</div>
        <div className="image-box">Img 2</div>
      </div>

      <div className="button-group">
        <Button
          text="View details"
          onClick={() => alert(`Details of ${title}`)}
        />
        <Button
          text="Choose emotion"
          onClick={() => alert(`You chose ${title}`)}
        />
      </div>
    </div>
  );
};

export default EmotionCard;
