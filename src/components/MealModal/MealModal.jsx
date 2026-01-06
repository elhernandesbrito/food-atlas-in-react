function MealModal({ meal, onClose }) {
  if (!meal) return null;

  return (
    <div className="meal-modal">
      <div className="meal-modal__overlay" onClick={onClose}></div>

      <div className="meal-modal__content">
        <button className="meal-modal__close" onClick={onClose}>
          ✕
        </button>

        <div className="meal-modal__body">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="meal-modal__image"
          />

          <h2 className="meal-modal__title">{meal.strMeal}</h2>

          <p className="meal-modal__meta">
            <strong>Origem:</strong> {meal.strArea}
          </p>

          <p className="meal-modal__meta">
            <strong>Categoria:</strong> {meal.strCategory}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MealModal;
