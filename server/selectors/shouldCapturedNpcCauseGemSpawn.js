module.exports = function(state){
  return state.totalCounts.totalPokemonCaught % 15 === 0;
}
