const pokemonSoFar = require('./pokemonSoFar');

function relativeRarity(speciesId) {
  if (speciesId === 1) return 20;     // Bulbasaur
  if (speciesId === 2) return 4;      // Ivysaur
  if (speciesId === 3) return 1;      // Venusaur
  if (speciesId === 4) return 20;     // Charmander
  if (speciesId === 5) return 4;     // Charmeleon
  if (speciesId === 6) return 1;      // Charizard
  if (speciesId === 7) return 20;    // Squirtle
  if (speciesId === 8) return 4;     // Wartortle
  if (speciesId === 9) return 1;     // Blastoise
  if (speciesId === 10) return 70;   // Caterpie
  if (speciesId === 11) return 10;    // Metapod
  if (speciesId === 12) return 2;    // Butterfree
  if (speciesId === 13) return 70;   // Weedle
  if (speciesId === 14) return 10;    // Kakuna
  if (speciesId === 15) return 2;    // Beedrill
  if (speciesId === 16) return 100;   // Pidgey
  if (speciesId === 17) return 10;    // Pidgeotto
  if (speciesId === 18) return 3;    // Pidgeot
  if (speciesId === 19) return 80;   // Rattata
  if (speciesId === 19) return 80;    // Raticate
  if (speciesId === 21) return 30;    // Spearow
  if (speciesId === 22) return 3;     // Fearow
  if (speciesId === 77) return 5;     // Ponyta
  if (speciesId === 78) return 1;     // Rapidash
  if (speciesId === 95) return 3;     // Onix
  if (speciesId === 107) return 10;   // Hitmonchan
  if (speciesId === 109) return 10;   // Koffing
  if (speciesId === 110) return 1;   // Weezing
  if (speciesId === 111) return 5;   // Rhyhorn
  if (speciesId === 112) return 1;   // Rhydon
  if (speciesId === 124) return 5;   // Jynx
  if (speciesId === 129) return 50;   // Magikarp
  if (speciesId === 130) return 5;   // Gyarados
  if (speciesId === 133) return 15;   // Eevee
  if (speciesId === 134) return 1;   // Vaporeon
  if (speciesId === 150) return 1;   // Mewto
  if (speciesId === 151) return 1;   // Mew
  if (speciesId === 152) return 4;   // Treecko
  if (speciesId === 153) return 1;   // Grovyle
  if (speciesId === 154) return 1;   // Sceptile
  return 0;
}

function getRandomArrayElemWithWeights(items, weights) {
  const totalWeight = weights.reduce((prev, cur) => prev + cur);
  const normalizedWeights = weights.map(weight => weight / totalWeight);

  const ran = Math.random();
  let s = 0;
  for (let i = 0; i < items.length - 1; i++) {
    s += normalizedWeights[i];
    if (ran < s) return items[i];
  }
  return items[items.length - 1];
}

module.exports = function getRandomPokemonSpecies() {
  const weights = pokemonSoFar.map(id => relativeRarity(id));
  return getRandomArrayElemWithWeights(pokemonSoFar, weights);
}
