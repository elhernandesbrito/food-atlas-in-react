const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(
      `Erro na API: ${res.status} ${res.statusText}`
    );
  }
  return res.json();
}


function request(url) {
  return fetch(url).then(checkResponse);
}

//Pratos
export function getMeals() {
  return request(`${BASE_URL}/search.php?s=`);
}

//lista de países
export function getAreas() {
  return request(`${BASE_URL}/list.php?a=list`);
}

//lista de categorias
export function getCategories() {
  return request(`${BASE_URL}/list.php?c=list`);
}

//filtrar por país
export function getMealsByArea(area) {
  return request(`${BASE_URL}/filter.php?a=${area}`);
}

//pratos por categoria
export function getMealsByCategory(category) {
  return request(
    `${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`
  );
}

export function getMealById(mealId) {
  return fetch(`${BASE_URL}/lookup.php?i=${mealId}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Erro na resposta da API');
      }
      return res.json();
    });
}



