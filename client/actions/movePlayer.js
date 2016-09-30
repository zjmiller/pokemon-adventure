export default function movePlayer(ws, haveProcessedBefore, { playerId, direction }) {
  const message = {
    action: 'movePlayer',
    options: {
      playerId,
      direction,
    },
    haveProcessedBefore,
  }

  ws.send(JSON.stringify(message));
}
