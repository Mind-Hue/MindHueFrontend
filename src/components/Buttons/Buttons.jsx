import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button className="btn-yellow" onClick={onClick}>
      {text}
    </button>
  );
}