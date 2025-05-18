import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EmotionCard from "../../components/EmotionCard/EmotionCard";
import "./Emotions.css";

const EmotionsPage = () => {
  const emotions = [
    { title: "Joy", color: "orange", description: "Funcionalmento..." },
    { title: "Sadness", color: "blue", description: "Funcionalmento..." },
    { title: "Anger", color: "red", description: "Funcionalmento..." },
    { title: "Fear", color: "green", description: "Funcionalmento..." },
    { title: "Calm", color: "lightblue", description: "Funcionalmento..." },
  ];

  return (
    <div>
      <Header />

      <main className="emotions-container">
        <h1>Emociones</h1>
        <p>Funcionalmento... Funcionalmento... Funcionalmento...</p>

        <div className="emotions-list">
          {emotions.map((emotion, index) => (
            <EmotionCard
              key={index}
              title={emotion.title}
              color={emotion.color}
              description={emotion.description}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmotionsPage;
