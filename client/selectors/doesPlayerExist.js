export default function doesPlayerExist(state, playerId) {
  return state.players.some(player => player.id === playerId);
}
