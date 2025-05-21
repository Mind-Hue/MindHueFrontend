import React from "react";
import "./QuestionBlock.css";

const QuestionBlock = ({ questions }) => {
  return (
    <div className="question-box">
      {questions.map((q) => (
        <div className="question-field" key={q.id}>
          <label>{q.question}</label>
          <input type="text" placeholder="Escribe tu respuesta..." />
        </div>
      ))}

      <div className="question-buttons">
        <button>Guardar</button>
        <button>Historial</button>
      </div>
    </div>
  );
};

export default QuestionBlock;
