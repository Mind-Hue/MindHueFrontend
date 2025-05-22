import React, { useState } from "react";
import Button from "../Buttons/Buttons";
import "./QuestionBlock.css";

const QuestionBlock = ({ questions }) => {
  const [answers, setAnswers] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSave = async () => {
    try {
      for (const q of questions) {
        const answerText = answers[q.id] || "";
        if (!answerText) continue; // Solo envía si hay respuesta

        const payload = {
          // id: null, // Descomenta si tu backend lo requiere
          question: {
            id: q.id,
            question: q.question,
          },
          answer: answerText,
        };

        const response = await fetch("http://localhost:8080/api/v1/reflections", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Error saving answer for question " + q.id);
        }
      }
      setMessage("Answers saved successfully!");
    } catch (err) {
      setMessage("Error saving answers.");
    }
  };

  const handleHistory = () => {
    setMessage("History feature coming soon!");
  };

  return (
    <div className="question-box">
      {questions.map((q) => (
        <div className="question-field" key={q.id}>
          <label>{q.question}</label>
          <input
            type="text"
            placeholder="Escribe tu respuesta..."
            value={answers[q.id] || ""}
            onChange={(e) => handleChange(q.id, e.target.value)}
          />
        </div>
      ))}

      <div className="question-buttons">
        <Button onClick={handleSave}>Guardar</Button>
        <Button onClick={handleHistory}>Historial</Button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default QuestionBlock;