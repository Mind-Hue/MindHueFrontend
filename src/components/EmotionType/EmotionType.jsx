import React, { useEffect, useState } from "react";
import { EmotionTypeService } from "../../service/apiService";

const App = () => {
  const [emotionTypes, setEmotionTypes] = useState([]);
  const emotionTypeService = new EmotionTypeService();

  useEffect(() => {
    console.log("Use effect!!!!!!");
    emotionTypeService.getAllEmotionTypes().then((res) => {
      setEmotionTypes(res);
      if (!emotionTypeId || isNaN(emotionTypeId)) {
        console.error("Invalid Emotion Type ID:", emotionTypeId);
        return;
      }
    });
  }, []);

  return (
    <div>
      <h1>Emotion Types!!!</h1>
      <div className="emotion-type-list">
        {emotionTypes.map((emotionType) => (
          <div key={emotionType.id} className="emotion-type-item">
            <h2>{emotionType.name}</h2>
            <p>Color: {emotionType.color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
