import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sections from "../../components/sections/sections";
import "./Reflections.css";
import QuestionBlock from "../../components/QuestionBlock/QuestionBlock";
import Timer from "../../components/Timer/Timer";

function Reflections() {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/reflections")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched questions:", data);
        setQuestions(data);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const handleChooseQuestion = (questionId) => {
    navigate(`/reflections?questionId=${questionId}`);
  };

  return (
    <>
      <Header />
      <Sections
        title="< Reflections"
        backgroundColor="#FFC107"
        className="section-reflections"
      ></Sections>
      <Timer />
      <QuestionBlock questions={questions} onChoose={handleChooseQuestion} />
      <main className="main-container">
        <div className="text-intro">
          <h2>¿Por qué registrar emociones?</h2>
          <p>
            Registrar tus emociones te ayuda a entender mejor cómo reaccionas
            ante distintas situaciones y cómo puedes mejorar tu bienestar
            emocional.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Reflections;
