const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

function checkResponse(res) {
  if (!res.ok) {
    throw new Error(`Erro na API: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

function request(url) {
  return fetch(url).then(checkResponse);
}

/* Endpoints da API*/

// Buscar pratos iniciais
export function getMeals() {
  return request(`${BASE_URL}/search.php?s=`);
}

// Listar países (áreas culinárias)
export function getAreas() {
  return request(`${BASE_URL}/list.php?a=list`);
}

// Listar categorias
export function getCategories() {
  return request(`${BASE_URL}/list.php?c=list`);
}

// Filtrar pratos por país
export function getMealsByArea(area) {
  return request(`${BASE_URL}/filter.php?a=${area}`);
}

// Filtrar pratos por categoria
export function getMealsByCategory(category) {
  return request(`${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`);
}

// Buscar detalhes de um prato por ID
export function getMealById(mealId) {
  return request(`${BASE_URL}/lookup.php?i=${mealId}`);
}
