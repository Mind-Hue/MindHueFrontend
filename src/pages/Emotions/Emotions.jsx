import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"; 
import EmotionCard from "../../components/EmotionCard/EmotionCard";
import joyIcon from "../../assets/emotionsIcons/joy_icon.png";
import sadnessIcon from "../../assets/emotionsIcons/sadness_icon.png";
import angerIcon from "../../assets/emotionsIcons/anger_icon.png";
import fearIcon from "../../assets/emotionsIcons/fear_icon.png";
import calmIcon from "../../assets/emotionsIcons/calm_icon.png";
import './Emotions.css';

const EmotionsPage = () => {
  const emotions = [
    { title: "Joy", color: "#FFC107", description: "Feeling happy!", icon: joyIcon },
    { title: "Sadness", color: "#0A58CA", description: "Feeling sad.", icon: sadnessIcon },
    { title: "Anger", color: "#DC3545", description: "Feeling angry!", icon: angerIcon },
    { title: "Fear", color: "#1AA179", description: "Feeling scared.", icon: fearIcon },
    { title: "Calm", color: "#0AA2C0", description: "Feeling calm.", icon: calmIcon },
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
              icon={emotion.icon}

            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmotionsPage;
