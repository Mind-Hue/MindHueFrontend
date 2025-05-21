import React from "react";
import "./QuestionBlock.css";

const QuestionBlock = ({ questions }) => {
  return (
    <div className="question-box">
      {questions.map((q, i) => (
        <div className="question-field" key={i}>
          <label>{q}</label>
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
