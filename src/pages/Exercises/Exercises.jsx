import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"; 
import ExerciseData from '../../components/ExerciseData/ExerciseData';
import './Exercises.css';


function Exercises() {
  return (
    <div>
      <Header />
      <div className="exercises-data">
          <ExerciseData />
      </div>
      <Footer />
      </div>
  );
}
export default Exercises;
