import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ExerciseData from "../../components/ExerciseData/ExerciseData";
import "./Exercises.css";
import Timer from "../../components/Timer/Timer";

function Exercises() {
  const [exercises, setExercises, emotions, setEmotions] = useState([]);
  const [emotionType, setEmotionType] = useState([]);
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
        setEmotionType(data);
      });
  }, [emotionTypeId]);

  return (
    <div>
      <Header />
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
            />
          ))
        ) : (
          <p>Loading exercises...</p>
        )}
        <Timer />
      </div>
      <Footer />
    </div>
  );
}

export default Exercises;
