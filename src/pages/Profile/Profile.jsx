import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sections from "../../components/sections/sections";
import EmotionLogCard from "../../components/EmotionLogCard/EmotionLogCard";
import profileImg from "../../assets/images/Profile.svg";
import "./Profile.css";


const ProfilePage = () => {
  const emotions = ["Joy", "Sadness", "Anger", "Fear", "Calm"];
  const logs = [
    {
      userName: "Name user",
      createdAt: "2025-05-21",
      exercise: "Mindfulness",
      question: "¿Cómo te sientes hoy?",
      answer: "Me siento más tranquilo después del ejercicio.",
    },
    // puedes agregar más
  ];

  return (
    <>
      <Header />
      <Sections />

      <div className="profile-container">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <h2 className="profile-name">Name user</h2>

        <div className="bar-chart">
          <h3>Registro reflexión</h3>
          {["Sport", "Work", "Friends", "Movie", "Travel", "Food"].map(
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
