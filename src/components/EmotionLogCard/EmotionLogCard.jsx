// src/components/EmotionLogCard.jsx
import React from "react";
import "./EmotionLogCard.css";

const EmotionLogCard = ({
  userName,
  createdAt,
  exercise,
  question,
  answer,
}) => {
  return (
    <div className="emotion-log-card">
      <p>
        <strong>Usuario:</strong> {userName}
      </p>
      <p>
        <strong>Fecha:</strong> {createdAt}
      </p>
      <p>
        <strong>Ejercicio:</strong> {exercise}
      </p>
      <p>
        <strong>Pregunta:</strong> {question}
      </p>
      <p>
        <strong>Respuesta:</strong> {answer}
      </p>
      <div className="card-buttons">
        <button>Ver detalles</button>
        <button>Eliminar</button>
      </div>
    </div>
  );
};

export default EmotionLogCard;
