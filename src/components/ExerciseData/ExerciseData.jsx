import React from "react";
import Button from "../Buttons/Buttons";
import "./ExerciseData.css";

const ExerciseData = ({ title, description, materials, estimatedTime, instructions }) => {
  // Mapa de imágenes predeterminadas según el título del ejercicio
  const imageMap = {
    "Yoga Stretch": "https://example.com/yoga-stretch.jpg",
    "Meditation": "https://example.com/meditation.jpg",
    "Breathing Exercise": "https://example.com/breathing-exercise.jpg",
  };

  // Asignar una imagen según el título o usar una imagen predeterminada
  const image = imageMap[title] || "https://example.com/default-exercise.jpg";

  return (
    <div className="exercise-container">
      <div className="exercise-content">
        {/* Imagen del ejercicio */}
        <div className="exercise-img">
          <img src={image} alt={`${title} illustration`} />
        </div>

        {/* Datos del ejercicio */}
        <div className="data-exercise">
          <h3>{title}</h3>
          <p>{description}</p>
          <p><strong>Materials:</strong> {materials || "None"}</p>
          <p><strong>Estimated Time:</strong> {estimatedTime || "N/A"} minutes</p>
        </div>
      </div>

      {/* Instrucciones del ejercicio */}
      <div className="instructions-box">
        <h2>Instructions</h2>
        <p>{instructions || "No instructions available."}</p>
        <Button
          text="Choose exercise"
          className="choose-button"
          onClick={() => alert(`Exercise "${title}" chosen!`)}
        />
      </div>
    </div>
  );
};

export default ExerciseData;