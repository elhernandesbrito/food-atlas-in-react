import './MealCard.css';

function MealCard({ meal, onSelectMeal }) {
  return (
    <article className="meal-card">
      <img
        className="meal-card__image"
        src={meal.strMealThumb}
        alt={meal.strMeal}
        loading="lazy"
        onClick={() => onSelectMeal(meal.idMeal)}
      />

      <div className="meal-card__content">
        <h3 className="meal-card__title">{meal.strMeal}</h3>
      </div>
    </article>
  );
}

export default MealCard;
