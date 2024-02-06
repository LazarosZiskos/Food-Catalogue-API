const APP_ID = "e2c1665c";
const APP_KEY = "84b7cf96ee4f65e1c0f08490f181851d";

// data.hits[0].recipe.label --> Recipe title

function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

let recipe;
const cardListEl = document.querySelector(".card__wrapper");

async function main() {
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2/?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`
  );
  const data = await response.json();
  const recipes = data.hits;
  cardListEl.innerHTML = recipes.map((recipe) => recipeHTML(recipe)).join("");
}

function recipeHTML(recipe) {
  return `<div class="card">
    <img src="${recipe.recipe.image}" alt="food-image">
    <div class="card__details">
        <h2 class="card__details--title text-orange">${recipe.recipe.label}</h2>
        </div>
        <div>
        <p class="card__details--para"><i>Cusine Type</i> : <b>${
          recipe.recipe.cuisineType
        }</b></p>  
        <p class="card__details--para"><i>Dish Type</i> : <b>${
          recipe.recipe.dishType
        }</b></p>
        <p class="card__details--para"><i>Calories</i> : <b>${recipe.recipe.calories.toFixed(
          2
        )}</b></p>
        </div>  
        <div class="card__details--link">
        <a href=${recipe.recipe.url.replace(
          /['"]+/g,
          ""
        )} target=_blank class="button margin-bottom" >View Full Recipe</a>
        </div>
        </div>
        `;
}

async function onChangeSearch(event) {
  searchParam = event.target.value;

  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2/?q=${searchParam}&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`
  );
  const data = await response.json();

  const recipes = data.hits;
  cardListEl.innerHTML = recipes.map((recipe) => recipeHTML(recipe)).join("");
}
