import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sections from "../../components/sections/sections";
import Footer from "../../components/Footer/Footer";
import EmotionCard from "../../components/EmotionCard/EmotionCard";
import joyIcon from "../../assets/emotionsIcons/joy_icon.png";
import sadnessIcon from "../../assets/emotionsIcons/sadness_icon.png";
import angerIcon from "../../assets/emotionsIcons/anger_icon.png";
import fearIcon from "../../assets/emotionsIcons/fear_icon.png";
import calmIcon from "../../assets/emotionsIcons/calm_icon.png";
import "./Emotions.css";

const EmotionsPage = () => {
  const [emotions, setEmotions] = useState([]);
  const navigate = useNavigate();

  const handleChooseEmotion = (emotionTypeId) => {
    navigate(`/exercises?emotionTypeId=${emotionTypeId}`);
  };

  // Mapa de íconos para asignarlos manualmente según el nombre de la emoción
  const iconMap = {
    Joy: joyIcon,
    Sadness: sadnessIcon,
    Anger: angerIcon,
    Fear: fearIcon,
    Calm: calmIcon,
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/emotion-types")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch emotions");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched emotions:", data); 
        setEmotions(data);
      })
      .catch((error) => console.error("Error fetching emotions:", error));
  }, []);

  return (
    <div>
      <Header />
      <Sections
        title="< Emotions"
        backgroundColor="#0A58CA"
        className="section-reflections"
      ></Sections>

      <main className="emotions-container">
        <h1>Emotions</h1>
        <p>Explore and understand your emotions effectively.</p>

        <div className="emotions-list">
          {emotions.map((emotion) => (
            <EmotionCard
              key={emotion.id}
              title={emotion.name}
              color={emotion.colorHex}
              description={`This is the ${emotion.name} emotion.`}
              icon={iconMap[emotion.name]} 
              onChoose={() => handleChooseEmotion(emotion.id)} 
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmotionsPage;
