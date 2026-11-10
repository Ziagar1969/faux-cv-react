
import './Home.css';

function Home() {
  return (
   <main>
      {/* Section 1 : Hero avec image de fond, titres et bouton interactif */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="display-3 fw-bold">Jane Doe</h1>
          <h2>Ingénieure Web et Créatrice d'applications</h2>
           <a href="#about" className="btn btn-primary btn-lg px-4 shadow">
  En savoir plus
</a>
 </div>  </section>

      {/* Section 2 : À propos */}
      <section id="about" className="about-section">
        <h2>À propos de moi</h2>
        <p>
          Bienvenue sur mon portfolio. Passionné par les technologies du web et la création d'interfaces intuitives, 
          j'ai conçu ce site pour présenter mon parcours, mes compétences ainsi que mes projets récents.
        </p>
        <p>
          Curieux, rigoureux et toujours en quête d'apprentissage, je conçois des solutions modernes et adaptées aux besoins des utilisateurs.
        </p>
      </section>

  </main>
  );
}

export default Home;