import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");

const renderCard = (pokemonObject) => {
  const { id, name, types, sprite } = pokemonObject;
};

pokemonArray.forEach((pokemon) => {
  cardContainer.innerHTML += renderCard(pokemon);
});
