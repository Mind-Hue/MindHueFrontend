import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sections from "../../components/sections/sections";
import EmotionLogCard from "../../components/EmotionLogCard/EmotionLogCard";
import profileImg from "../../assets/images/Profile.svg";
import "./Profile.css";

const ProfilePage = () => {
  const userName = localStorage.getItem("userName") || "Name user";
  const emotions = ["Joy", "Sadness", "Anger", "Fear", "Calm"];
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/emotion-logs")
      .then((res) => res.json())
      .then((data) => setLogs(data))
      .catch((err) => console.error("Error fetching logs:", err));
  }, []);

  return (
    <>
      <Header />
      <Sections />

      <div className="profile-container">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <h2 className="profile-name">{userName}</h2>

        <div className="bar-chart">
          <h3>Registro reflexión</h3>
          {["Joy", "Sadness", "Anger", "Fear", "Calm"].map(
            (label, i) => (
              <div key={i} className="bar-item">
                <span>{label}</span>
                <div className={`bar bar-${i}`}></div>
              </div>
            )
          )}
        </div>

        <div className="emotion-list">
          {emotions.map((emotion, index) => (
            <span key={index} className="emotion-item">
              {emotion}
            </span>
          ))}
        </div>

        <div className="logs-section">
          {logs.map((log, index) => (
            <EmotionLogCard key={index} {...log} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
