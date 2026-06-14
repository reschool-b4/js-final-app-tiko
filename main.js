const API = "https://pokeapi.co/api/v2/pokemon/";
const MAX = 120;
const PER_PAGE = 12;

let currentPage = 1;
let cache = {};

const typeColors = {
  grass: "#4fc1a6",
  fire: "#fb6c6c",
  water: "#76befe",
  electric: "#ffd86f",
  bug: "#c3ce5b",
  normal: "#bbbbae",
  poison: "#b59ae0",
  ground: "#e0c068",
  fairy: "#f4b1c3",
  fighting: "#d04164",
  psychic: "#fa7179",
  rock: "#c5b78c",
  ghost: "#7c62a3",
  ice: "#76d0c1",
  dragon: "#5a7cff",
  dark: "#5a5465",
  steel: "#b8b8d0",
  flying: "#93b8e2",
};
