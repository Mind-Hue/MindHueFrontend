import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home/Home";
import Emotions from "../../pages/Emotions/Emotions";
import Exercises from "../../pages/Exercises/Exercises";
import Profile from "../../pages/Profile/Profile";
import Reflections from "../../pages/Reflections/Reflections";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/emotions" element={<Emotions />} />
        <Route path="/emotionType" element={<Emotions />} />,
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reflections" element={<Reflections />} />
      </Routes>
    </BrowserRouter>
  );
}
