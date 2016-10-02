export default function changeSpecies(ws, haveProcessedBefore, { playerId, speciesId }) {
  const message = {
    action: 'changeSpecies',
    options: {
      playerId,
      speciesId,
    },
    haveProcessedBefore,
  }

  ws.send(JSON.stringify(message));
}
