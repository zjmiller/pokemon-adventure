const pokemonSoFar = require('./pokemonSoFar');

function relativeRarity(speciesId) {
  return 1; // added this in for dex special

  if (speciesId === 1) return 10;     // Bulbasaur
  if (speciesId === 2) return 1;      // Ivysaur
  if (speciesId === 3) return 0.5;      // Venusaur
  if (speciesId === 4) return 10;     // Charmander
  if (speciesId === 5) return 1;     // Charmeleon
  if (speciesId === 6) return 0.5;      // Charizard
  if (speciesId === 7) return 10;    // Squirtle
  if (speciesId === 8) return 1;     // Wartortle
  if (speciesId === 9) return 0.5;     // Blastoise
  if (speciesId === 10) return 70;   // Caterpie
  if (speciesId === 11) return 4;    // Metapod
  if (speciesId === 12) return 1;    // Butterfree
  if (speciesId === 13) return 70;   // Weedle
  if (speciesId === 14) return 4;    // Kakuna
  if (speciesId === 15) return 1;    // Beedrill
  if (speciesId === 16) return 100;   // Pidgey
  if (speciesId === 17) return 5;    // Pidgeotto
  if (speciesId === 18) return 2;    // Pidgeot
  if (speciesId === 19) return 80;   // Rattata
  if (speciesId === 20) return 2;    // Raticate
  if (speciesId === 21) return 30;    // Spearow
  if (speciesId === 22) return 2;     // Fearow
  if (speciesId === 23) return 10;    // Ekans
  if (speciesId === 24) return 1;     // Arbok
  if (speciesId === 25) return 10;    // Pikachu
  if (speciesId === 26) return 1;     // Raichu
  if (speciesId === 41) return 50;     // Zubat
  if (speciesId === 42) return 10;     // Golbat
  if (speciesId === 50) return 10;     // Diglett
  if (speciesId === 51) return 1;     // Dugtrio
  if (speciesId === 77) return 5;     // Ponyta
  if (speciesId === 78) return 1;     // Rapidash
  if (speciesId === 95) return 3;     // Onix
  if (speciesId === 102) return 8;   // Exeggcute
  if (speciesId === 103) return 0.5;   // Exeggutor
  if (speciesId === 107) return 10;   // Hitmonchan
  if (speciesId === 109) return 10;   // Koffing
  if (speciesId === 110) return 1;   // Weezing
  if (speciesId === 111) return 5;   // Rhyhorn
  if (speciesId === 112) return 1;   // Rhydon
  if (speciesId === 124) return 5;   // Jynx
  if (speciesId === 129) return 20;   // Magikarp
  if (speciesId === 130) return 0.5;   // Gyarados
  if (speciesId === 131) return 0.5;   // Lapras
  if (speciesId === 133) return 10;   // Eevee
  if (speciesId === 134) return 0.5;   // Vaporeon
  if (speciesId === 143) return 0.5;   // Snorlax
  if (speciesId === 150) return 0.5;   // Mewto
  if (speciesId === 151) return 0.1;   // Mew

  // These are currently not in game
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
