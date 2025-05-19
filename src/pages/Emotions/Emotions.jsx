import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
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

  // Mapa de íconos para asignarlos manualmente según el nombre de la emoción
  const iconMap = {
    Joy: joyIcon,
    Sadness: sadnessIcon,
    Anger: angerIcon,
    Fear: fearIcon,
    Calm: calmIcon,
  };

  const colorMap = {
    Joy: "#FFC107", // Amarillo
    Sadness: "#0A58CA", // Azul
    Anger: "#DC3545", // Rojo
    Fear: "#1AA179", // Verde
    Calm: "#0AA2C0", // Azul claro
  };

  useEffect(() => {
    // Realiza una solicitud GET al backend
    fetch("http://localhost:8080/api/v1/emotion-types") // Cambia la URL según tu backend
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch emotions");
        }
        return response.json();
      })
      .then((data) => setEmotions(data))
      .catch((error) => console.error("Error fetching emotions:", error));
  }, []);

  return (
    <div>
      <Header />

      <main className="emotions-container">
        <h1>Emotions</h1>
        <p>Explore and understand your emotions effectively.</p>

        <div className="emotions-list">
          {emotions.map((emotion, index) => (
            <EmotionCard
              key={index}
              title={emotion.name}
              colorHex={colorMap[emotion.name]} // Asigna el color desde el mapa
              description={`This is the ${emotion.name} emotion.`}
              icon={iconMap[emotion.name]}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmotionsPage;
