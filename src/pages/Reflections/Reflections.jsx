import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sections from "../../components/sections/sections";
import "./Reflections.css";
import QuestionBlock from "../../components/QuestionBlock/QuestionBlock";
import Timer from "../../components/Timer/Timer";
import Buttons from "../../components/Buttons/Buttons";

function Reflections() {
  const [questions, setQuestions] = useState([]);
  const [searchParams] = useSearchParams();
  const showTimer = searchParams.get("timer") === "1";
  const introRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/questions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  // Función para hacer scroll a la intro
  const scrollToIntro = () => {
    if (introRef.current) {
      introRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <Sections
        title="< Reflections"
        backgroundColor="#FFC107"
        className="section-reflections"
      />
      {showTimer && <Timer onFinish={scrollToIntro} />}
      <main className="main-container">
        <div className="text-intro" ref={introRef}>
          <h2>¿Por qué registrar emociones?</h2>
          <p>
            Registrar tus emociones te ayuda a entender mejor cómo reaccionas
            ante distintas situaciones y cómo puedes mejorar tu bienestar
            emocional.
          </p>
        </div>
      </main>
      <QuestionBlock questions={questions} />
      <Footer />
    </>
  );
}

export default Reflections;