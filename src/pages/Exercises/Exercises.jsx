import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sections from "../../components/sections/sections";
import Footer from "../../components/Footer/Footer";
import ExerciseData from "../../components/ExerciseData/ExerciseData";
import "./Exercises.css";
// import Timer from "../../components/Timer/Timer";
import EmotionalRegistry from "../../components/EmotionalRegistry/EmotionalRegistry";

function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [emotionType, setEmotionType] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar el popup
  const [selectedExercise, setSelectedExercise] = useState(null); // Estado para el ejercicio seleccionado
  const [searchParams] = useSearchParams();
  const emotionTypeId = searchParams.get("emotionTypeId"); // Obtén emotionTypeId desde los parámetros de búsqueda

  useEffect(() => {
    if (!emotionTypeId || isNaN(emotionTypeId)) {
      console.error("Invalid Emotion Type ID:", emotionTypeId);
      return;
    }

    console.log("Fetching exercises for Emotion Type ID:", emotionTypeId);
    console.log("Emotion Type ID:", emotionTypeId);

    fetch(`http://localhost:8080/api/v1/exercise/emotion/${emotionTypeId}`)
      .then((response) => {
        if (!response.ok) {
          console.error(`Error: ${response.status} ${response.statusText}`);
          throw new Error("Failed to fetch exercises");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched exercises:", data);
        setExercises(data);
      })
      .catch((error) => console.error("Error fetching exercises:", error));

    fetch(`http://localhost:8080/api/v1/emotion-types/${emotionTypeId}`)
      .then((response) => {
        if (!response.ok) {
          console.error(`Error: ${response.status} ${response.statusText}`);
          throw new Error("Failed to fetch emotion type");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched emotion type:", data);
        setEmotionType(data); // Guarda el emotionType en el estado
      });
  }, [emotionTypeId]);

  const handleChooseExercise = (exercise) => {
    console.log("Exercise selected:", exercise);
    setSelectedExercise(exercise);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false); // Oculta el popup
    setSelectedExercise(null); // Limpia el ejercicio seleccionado
  };

  return (
    <>
      <Header />
      <Sections
        title="< Reflections"
        backgroundColor="#1AA179"
        className="section-reflections"
      ></Sections>

      <div className="exercises-data">
        {exercises.length > 0 ? (
          exercises.map((exercise) => (
            <ExerciseData
              key={exercise.id}
              title={exercise.name}
              description={exercise.instructions}
              materials={exercise.materials}
              estimatedTime={exercise.estimatedTime}
              instructions={exercise.instructions}
              color={emotionType.body.colorHex} // Pasa el color dinámico o un color predeterminado
              onChoose={() => handleChooseExercise(exercise)} // Maneja el botón "Choose Exercise"
            />
          ))
        ) : (
          <p>Loading exercises...</p>
        )}
        {/* <Timer /> */}
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={closePopup}>
              &times;
            </button>
            <EmotionalRegistry
              exercise={selectedExercise}
              emotionType={emotionType}
              // emotionType={emotionType} // Pasa el objeto completo emotionType
              onClose={closePopup}
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Exercises;
