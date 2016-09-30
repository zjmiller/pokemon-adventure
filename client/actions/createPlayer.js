import randomColor from 'randomcolor';

export default function createPlayer(ws, haveProcessedBefore, { playerId }) {
  const message = {
    action: 'createPlayer',
    options: {
      playerId,
      color: randomColor(),
    },
    haveProcessedBefore,
  }

  ws.send(JSON.stringify(message));
}
