import React from "react";
import Button from "../Buttons/Buttons";
import "./EmotionCard.css";

const EmotionCard = ({ title, color, description, icon }) => {
  console.log("EmotionCard color:", color);
  return (
    <div className="emotion-card" style={{ borderColor: color }}>
      <div className="emotion-header">
        <h2>{title}</h2>
        {icon && (
          <img src={icon} alt={`${title} icon`} className="emotion-icon" />
        )}
      </div>

      <div className="emotion-body">
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
    </div>
  );
};

export default EmotionCard;
