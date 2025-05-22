import "./EmotionLogCard.css";

const EmotionLogCard = ({
  emotionTypeId,
  userName,
  createdAt,
  exerciseId,
  questionId,
  answerId,
}) => {
  return (
    <div className="emotion-log-card">
      <p>
        <strong>Emotion:</strong> {emotionTypeId}
      </p>
      <p>
        <strong>User name:</strong> {userName}
      </p>
      <p>
        <strong>Date:</strong> {createdAt}
      </p>
      <p>
        <strong>Exercise:</strong> {exerciseId}
      </p>
      <p>
        <strong>Questions:</strong> {questionId}
      </p>
      <p>
        <strong>Your Answers:</strong> {answerId}
      </p>
      <div className="card-buttons">
        <button>Ver detalles</button>
        <button>Eliminar</button>
      </div>
    </div>
  );
};

export default EmotionLogCard;
