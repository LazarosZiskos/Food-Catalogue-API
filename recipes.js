const APP_ID = "e2c1665c";
const APP_KEY = "84b7cf96ee4f65e1c0f08490f181851d";

function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

const cardListEl = document.querySelector(".card__wrapper");

let result;

function renderHTML(result) {
  return `<div class="card">
    <img src="${result.recipe.image}" alt="food-image">
    <div class="card__details">
        <h2 class="card__details--title text-orange">${result.recipe.label}</h2>
        </div>
        <div>
        <p class="card__details--para"><i>Cusine Type</i> : <b>${
          result.recipe.cuisineType
        }</b></p>  
        <p class="card__details--para"><i>Dish Type</i> : <b>${
          result.recipe.dishType
        }</b></p>
        <p class="card__details--para"><i>Calories</i> : <b>${result.recipe.calories.toFixed(
          2
        )}</b></p>
        </div>  
        <div class="card__details--link">
        <a href=${result.recipe.url.replace(
          /['"]+/g,
          ""
        )} target=_blank class="button margin-bottom" >View Full Recipe</a>
        </div>
        </div>
        `;
}

async function searchChange(event) {
  searchParam = event.target.value;

  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2/?q=${searchParam}&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`
  );
  const data = await response.json();

  const results = data.hits;
  cardListEl.innerHTML = results.map((result) => renderHTML(result)).join("");
}
