let paused = false;

export default function pause(ws) {
  if (window.location.hash !== '#pause') return;
  
  let message;

  if (paused) {
    message = { action: 'resume' };
    paused = false;
  }
  else {
    message = { action: 'pause' };
    paused = true;
  }

  ws.send(JSON.stringify(message));
}
