import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmotionalRegistry.css";

const EmotionalRegistry = ({ exercise, emotionType, onClose }) => {
  const [userName, setUserName] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      emotionTypeId: emotionType.id,
      exerciseId: exercise.id,
      userName,
      createdAt,
    };

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
        // Redirige a /reflections después de guardar
        navigate("/reflections?timer=1");
      })
      .catch((error) => {
        console.error("Error submitting emotion log:", error);
        alert("Failed to submit emotion log. Please try again.");
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
