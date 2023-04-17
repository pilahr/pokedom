import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");

const renderCard = (pokemonObject) => {
  const { name, types, sprite, id } = pokemonObject;

  return `<div style="width:100%" class="card">
  <img class="card__image" src=${sprite} />
  <div class="card__content">
    <h2 class="card__heading">${name}</h2>
    <p class="card__text">${name} (${id}) is a ${types} type pokemon.</p>
  </div>`;
};

pokemonArray.forEach((pokemon) => {
  cardContainer.innerHTML += renderCard(pokemon);
});
