export default function tradeInSpecies(ws, haveProcessedBefore, { playerId, speciesId }) {
  const message = {
    action: 'tradeInSpecies',
    options: {
      playerId,
      speciesId,
    },
    haveProcessedBefore,
  }

  ws.send(JSON.stringify(message));
}
