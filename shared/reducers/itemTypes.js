const initialState = [
  {
    id: 1,
    name: 'Berry',
    img: 'razz-berry.png',
    backgroundPosition:'0 0',
    backgroundSize:  '32px 32px',
  },

  {
    id: 2,
    name: 'Mushroom',
    img: 'balm-mushroom.png',
    backgroundPosition:'0 0',
    backgroundSize:  '32px 32px',
  },

  {
    id: 3,
    name: 'Gem',
    img: 'dragon-gem.png',
    backgroundPosition:'0 0',
    backgroundSize:  '32px 32px',
  },

  {
    id: 4,
    name: 'Mega Berry',
    img: 'custap-berry.png',
    backgroundPosition:'0 0',
    backgroundSize:  '32px 32px',
  }
];

module.exports = function (state) {
  if (state === undefined) state = initialState;
  return state;
}
