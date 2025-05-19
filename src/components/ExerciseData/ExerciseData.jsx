import React from "react";
import Button from "../Buttons/Buttons";
import "./ExerciseData.css";

const ExerciseData = () => {
  return (
    <div className="exercise-container">
      <div className="exercise-content">
        <div className="exercise-img"></div>
        <div className="data-exercise">
          <h3>Exercise Title</h3>
          <p>Exercise description goes here.</p>
        </div>
      </div>
      <div className="instructions-box">
        <h2>Instrucciones</h2>
        <p>
          FuncionamientoFuncionamientoFuncionamientoFuncionamientoFuncionamientoFuncionamiento.
        </p>
        <Button
          text="Choose exercise"
          className="choose-button"
          onClick={() => alert("Exercise chosen!")}
        />
      </div>
    </div>
  );
};

export default ExerciseData;