module.exports = function isPlayerDead(state, playerId) {
  const player = state.players.find(player => player.id === playerId);
  return player.hp <= 0;
}
