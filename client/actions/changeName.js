export default function changeName(ws, haveProcessedBefore, { playerId, newName }) {
  const message = {
    action: 'changeName',
    options: {
      playerId,
      newName,
    },
    haveProcessedBefore,
  }

  ws.send(JSON.stringify(message));
}
