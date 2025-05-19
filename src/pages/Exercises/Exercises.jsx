import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ExerciseData from "../../components/ExerciseData/ExerciseData";
import "./Exercises.css";
import Timer from "../../components/Timer/Timer";

function Exercises() {
  return (
    <div>
      <Header />
      <div className="exercises-data">
        <ExerciseData />
        <div>
          <Timer duration={60} onExit={() => console.log("Exited")} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Exercises;
