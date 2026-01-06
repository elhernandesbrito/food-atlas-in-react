import "./Meals.css";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import MealCard from "../MealCard/MealCard";
import {
  getMeals,
  getAreas,
  getCategories,
  getMealsByArea,
  getMealsByCategory,
  getMealById,
} from "../../utils/mealApi";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  // Controle do menu
  const [filterMode, setFilterMode] = useState(null);

  // Listas auxiliares
  const [areas, setAreas] = useState([]);
  const [categories, setCategories] = useState([]);

  // Filtros (não combináveis)
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Modal
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const shouldShowModal = selectedMealId !== null;

  /* Carregamento inicial */

  useEffect(() => {
    getMeals()
      .then((data) => {
        setMeals(data.meals || []);
      })
      .catch((err) => {
        setError("Desculpe, algo deu errado ao carregar os pratos.");
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  /* Menu exploratório */

  useEffect(() => {
    if (filterMode === "area" && areas.length === 0) {
      getAreas()
        .then((data) => setAreas(data.meals || []))
        .catch(console.error);
    }

    if (filterMode === "category" && categories.length === 0) {
      getCategories()
        .then((data) => setCategories(data.meals || []))
        .catch(console.error);
    }
  }, [filterMode, areas.length, categories.length]);

  /*Fechar modal com ESC */
  useEffect(() => {
    if (!shouldShowModal) return;
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        setSelectedMealId(null);
        setSelectedMeal(null);
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [shouldShowModal]);

  /* Handlers (eventos)*/

  const handleSelectMeal = (mealId) => {
    setSelectedMealId(mealId);
    setIsLoading(true);
    setError(null);

    getMealById(mealId)
      .then((data) => {
        setSelectedMeal(data.meals ? data.meals[0] : null);
      })
      .catch((err) => {
        setError("Erro ao carregar detalhes do prato.");
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSelectArea = (area) => {
    setSelectedArea(area);
    setSelectedCategory("");
    setVisibleCount(3);
    setIsLoading(true);
    setError(null);

    if (!area) return;

    getMealsByArea(area)
      .then((data) => setMeals(data.meals || []))
      .catch((err) => {
        setError("Erro ao filtrar pratos por país.");
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedArea("");
    setVisibleCount(3);
    setIsLoading(true);
    setError(null);

    if (!category) return;

    getMealsByCategory(category)
      .then((data) => setMeals(data.meals || []))
      .catch((err) => {
        setError("Erro ao filtrar pratos por categoria.");
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleClearFilters = () => {
    setSelectedArea("");
    setSelectedCategory("");
    setFilterMode(null);
    setVisibleCount(3);
    setIsLoading(true);
    setError(null);

    getMeals()
      .then((data) => setMeals(data.meals || []))
      .catch((err) => {
        setError("Erro ao recarregar os pratos.");
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  };

  /* Render */

  return (
    <main className="meals">
      <section className="meals__intro">
        <div className="meals__container">
          <h2 className="meals__title">Pratos típicos</h2>
          <p className="meals__description">
            Nesta seção, você pode escolher como deseja explorar: por país ou
            por categoria.
          </p>
          <p className="meals__description">
            Clique na imagem de um prato para ver seus detalhes.
          </p>
        </div>
      </section>

      <section className="meals__filters">
        <div className="filters-menu">
          <button
            className={`filter-button ${filterMode === "area" ? "active" : ""}`}
            onClick={() => setFilterMode("area")}
          >
            🌍 Por país
          </button>

          <button
            className={`filter-button ${
              filterMode === "category" ? "active" : ""
            }`}
            onClick={() => setFilterMode("category")}
          >
            🍽 Por categoria
          </button>
        </div>
      </section>

      {filterMode === "area" && (
        <section className="meals__filter-panel">
          <label>
            Selecione um país:
            <select
              value={selectedArea}
              onChange={(e) => handleSelectArea(e.target.value)}
            >
              <option value="">Todos os países</option>
              {areas.map((area) => (
                <option key={area.strArea} value={area.strArea}>
                  {area.strArea}
                </option>
              ))}
            </select>
          </label>
        </section>
      )}

      {filterMode === "category" && (
        <section className="meals__filter-panel">
          <label>
            Selecione uma categoria:
            <select
              value={selectedCategory}
              onChange={(e) => handleSelectCategory(e.target.value)}
            >
              <option value="">Todas as categorias</option>
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </select>
          </label>
        </section>
      )}

      {(selectedArea || selectedCategory) && (
        <>
          <p className="meals__active-filter">
            Exibindo pratos da{" "}
            <strong>{selectedArea || selectedCategory}</strong>
          </p>
          <button className="meals__clear" onClick={handleClearFilters}>
            Limpar filtros
          </button>
        </>
      )}

      {isLoading && <Preloader />}
      {error && <p className="meals__error">{error}</p>}

      {!isLoading && !error && meals.length === 0 && (
        <p className="meals__empty">
          Nenhum prato encontrado para o filtro selecionado.
        </p>
      )}

      {!isLoading && !error && meals.length > 0 && (
        <>
          <div className="meals__cards">
            {meals.slice(0, visibleCount).map((meal) => (
              <MealCard
                key={meal.idMeal}
                meal={meal}
                onSelectMeal={handleSelectMeal}
              />
            ))}
          </div>

          {meals.length > visibleCount && (
            <button
              className="meals__more"
              onClick={() => setVisibleCount((prev) => prev + 3)}
            >
              Mostrar mais
            </button>
          )}
        </>
      )}

      {shouldShowModal && (
        <div className="meal-modal">
          <div className="meal-modal__overlay"></div>

          <div className="meal-modal__content">
            <button
              className="meal-modal__close"
              onClick={() => setSelectedMealId(null)}
            >
              ✕
            </button>

            <div className="meal-modal__body">
              {!selectedMeal && <p>Carregando detalhes do prato...</p>}

              {selectedMeal && (
                <>
                  <img
                    src={selectedMeal.strMealThumb}
                    alt={selectedMeal.strMeal}
                    className="meal-modal__image"
                  />
                  <h2 className="meal-modal__title">{selectedMeal.strMeal}</h2>

                  <p className="meal-modal__meta">
                    <strong>Origem:</strong> {selectedMeal.strArea}
                  </p>

                  <p className="meal-modal__meta">
                    <strong>Categoria:</strong> {selectedMeal.strCategory}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Meals;
