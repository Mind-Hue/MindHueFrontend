import React from "react";
import Button from "../Buttons/Buttons";
import "./EmotionCard.css";
import EmotionsIcon from "../../assets/emotionsIcons/joy_icon.png";
import ImagenBox from "../../assets/Image.png"

const EmotionCard = ({ title, description, color }) => {
  return (
    <div className="emotion-card">
      <div className="emotion-header">
        <h2>{title}</h2>
        <img src={EmotionsIcon} alt={`${title} icon`} />
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
