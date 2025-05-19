import React, { useState } from 'react';
import './EmotionalRegistry.css';
// import Button from "../Buttons/Buttons";

const EmotionalRegistry = () => {
  const [formData, setFormData] = useState({
    username: '',
    date: '',
    emotion: '',
    exerciseName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="emotional-registry">
      <form onSubmit={handleSubmit}>
        <h2>Registro emocional</h2>
        <p className="subtitle">FuncionamientoFuncionamientoFuncionamiento.</p>
        
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Emotion</label>
          <input
            type="text"
            name="emotion"
            value={formData.emotion}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Name exercise choosed</label>
          <input
            type="text"
            name="exerciseName"
            value={formData.exerciseName}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Empezar
        </button>
      </form>
    </div>
  );
};

export default EmotionalRegistry;