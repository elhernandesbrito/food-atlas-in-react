import "./About.css";

function About() {
  return (
    <main className="about">
      <section className="about__container">
        <h2 className="about__title">Sobre o projeto</h2>

        <p className="about__description">
          O Food Atlas é uma aplicação desenvolvida em React que permite
          explorar pratos típicos de diferentes países e regiões do mundo.
          Utilizando dados reais de uma API pública, o projeto apresenta
          informações básicas sobre culinárias internacionais de forma simples,
          visual e acessível.
        </p>

        <p className="about__notice">
          Os países disponíveis para filtragem dependem exclusivamente das áreas
          culinárias existentes na API TheMealDB. Nem todos os países do mundo
          estão representados.
        </p>
      </section>
    </main>
  );
}

export default About;
