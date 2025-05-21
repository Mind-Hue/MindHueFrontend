import React from "react";
import "./Sections.css";

const Sections = ({ title, backgroundColor, className = "", children }) => {
  const sectionStyle = {
    backgroundColor: backgroundColor || "#f0eeee",
  };

  return (
    <section className={`${className}`} style={sectionStyle}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default Sections;
