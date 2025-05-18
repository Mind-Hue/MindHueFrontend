import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"; // Asegúrate de que este archivo exista

function Home() {
  return (
    <>
      <Header />
      <main>
        <header>
          <div className="menu-icon">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <h2>Bienvenido</h2>
          <p className="description">
            Descubre cómo explorar y comprender tus emociones de manera efectiva.
          </p>
          <div className="image-placeholder"></div>
        </section>

        {/* Emotions */}
        <section className="section-gray">
          <h3>Explora tus emociones</h3>
          <div className="emotions">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <button className="btn-yellow" onClick={() => alert("Detalles próximamente")}>
            View details
          </button>
        </section>

        {/* Emotion Wheel */}
        <section className="section-dark">
          <h4>¿Qué emoción estás sintiendo?</h4>
          <p className="description">
            Aprende a identificar y gestionar tus emociones con nuestra guía interactiva.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;