import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <section className="main__intro">
        <div className="main__container">
          <h2 className="main__title">
            Descubra sabores do mundo através da gastronomia
          </h2>

          <p className="main__description">
            O Food Atlas convida você a explorar pratos típicos de diferentes
            países e culturas, reunindo sabores, cores e tradições em um só
            lugar. Navegue por receitas tradicionais, conheça pratos icônicos e
            mergulhe na diversidade culinária que conecta pessoas ao redor do
            mundo.
          </p>

          <Link to="/pratos" className="main__button">
            EXPLORAR PRATOS
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Main;
