import React, { useState } from "react";
import "./EmotionalRegistry.css";

const EmotionalRegistry = ({ exercise, emotionType, onClose }) => {
  const [userName, setUserName] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construir el payload para enviar al backend
    const payload = {
      emotionTypeId: emotionType.id, // ID del tipo de emoción
      exerciseId: exercise.id, // ID del ejercicio
      userName, // Nombre del usuario
      createdAt, // Fecha y hora seleccionada
    };

    console.log("Submitting payload:", payload);

    // Enviar los datos al backend mediante un POST
    fetch("http://localhost:8080/api/v1/emotion-logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit emotion log");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Emotion log submitted:", data);
        alert("Emotion log successfully submitted!"); // Notificación de éxito
        onClose(); // Cierra el popup después de enviar los datos
      })
      .catch((error) => {
        console.error("Error submitting emotion log:", error);
        alert("Failed to submit emotion log. Please try again."); // Notificación de error
      });
  };

  return (
    <div className="emotional-registry">
      <h2>Emotional Registry</h2>
      <p className="subtitle">
        Log your emotions for the exercise: <strong>{exercise?.name}</strong>
      </p>
      <p className="subtitle">
        Emotion Type: <strong>{emotionType?.name}</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="createdAt">Date</label>
          <input
            type="datetime-local"
            id="createdAt"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Start
        </button>
      </form>
    </div>
  );
};

export default EmotionalRegistry;