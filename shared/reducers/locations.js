const initialState = [];

for (let x = 0; x < 30; x++){
  for (let y = 0; y < 20; y++) {
    initialState.push({
      x,
      y,
      player: false,
      npc: false,
      berry: false,
      mushroom: false,
      gem: false,
    });
  }
}

module.exports = function(state, action) {
  if (state === undefined) state = initialState;

  if (action.type === 'CREATE_PLAYER') {
    return state.map(loc => {
      const playerWasCreatedHere = loc.x === action.x && loc.y === action.y;
      if (!playerWasCreatedHere) return loc;
      return Object.assign(
        {},
        loc,
        { player: action.playerId }
      );
    });
  }

  if (action.type === 'MOVE_PLAYER') {
    const oldI = state.findIndex(loc => loc.player === action.playerId);
    const oldLoc = state[oldI];
    const oldX = oldLoc.x;
    const oldY = oldLoc.y;
    let newX = oldX;
    let newY = oldY;

    if (action.direction === 'left') newX--;
    if (action.direction === 'up') newY--;
    if (action.direction === 'right') newX++;
    if (action.direction === 'down') newY++;

    const newI = state.findIndex(loc => loc.x === newX && loc.y === newY);

    return state.map((loc, i) => {
      if (i !== oldI && i !== newI) return loc;
      if (i === oldI) return Object.assign(
        {},
        loc,
        { player: false }
      );
      if (i === newI) return Object.assign(
        {},
        loc,
        { player: action.playerId }
      );
    });
  }

  if (action.type === 'MOVE_NPC') {
    const oldI = state.findIndex(loc => loc.npc === action.npcId);
    const oldLoc = state[oldI];
    const oldX = oldLoc.x;
    const oldY = oldLoc.y;
    let newX = oldX;
    let newY = oldY;

    if (action.direction === 'left') newX--;
    if (action.direction === 'up') newY--;
    if (action.direction === 'right') newX++;
    if (action.direction === 'down') newY++;

    const newI = state.findIndex(loc => loc.x === newX && loc.y === newY);

    return state.map((loc, i) => {
      if (i !== oldI && i !== newI) return loc;
      if (i === oldI) return Object.assign(
        {},
        loc,
        { npc: false }
      );
      if (i === newI) return Object.assign(
        {},
        loc,
        { npc: action.npcId }
      );
    });
  }

  if (action.type === 'SPAWN_BERRY') {
    return state.map(loc => {
      const isSpecifiedLocation = loc.x === action.x && loc.y === action.y
      if (!isSpecifiedLocation) return loc;
      return Object.assign(
        {},
        loc,
        { berry: true }
      );
    });
  }

  if (action.type === 'SPAWN_MUSHROOM') {
    return state.map(loc => {
      const isSpecifiedLocation = loc.x === action.x && loc.y === action.y
      if (!isSpecifiedLocation) return loc;
      return Object.assign(
        {},
        loc,
        { mushroom: true }
      );
    });
  }

  if (action.type === 'SPAWN_GEM') {
    return state.map(loc => {
      const isSpecifiedLocation = loc.x === action.x && loc.y === action.y
      if (!isSpecifiedLocation) return loc;
      return Object.assign(
        {},
        loc,
        { gem: true }
      );
    });
  }

  if (action.type === 'SPAWN_NPC') {
    return state.map(loc => {
      const isSpecifiedLocation = loc.x === action.x && loc.y === action.y
      if (!isSpecifiedLocation) return loc;
      return Object.assign(
        {},
        loc,
        { npc: action.npcId }
      );
    });
  }

  if (action.type === 'EAT_BERRY') {
    return state.map(loc => {
      const playerIsHere = loc.player === action.playerId;
      if (!playerIsHere) return loc;
      return Object.assign(
        {},
        loc,
        { berry: false }
      );
    })
  }

  if (action.type === 'EAT_MUSHROOM') {
    return state.map(loc => {
      const playerIsHere = loc.player === action.playerId;
      if (!playerIsHere) return loc;
      return Object.assign(
        {},
        loc,
        { mushroom: false }
      );
    })
  }

  if (action.type === 'EAT_NPC') {
    return state.map(loc => {
      const npcIsHere = loc.npc === action.npcId;
      if (!npcIsHere) return loc;
      return Object.assign(
        {},
        loc,
        { npc: false }
      );
    })
  }

  return state;
}
