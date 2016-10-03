const initialState = [
  {
    id: 1,
    name: 'Bulbasaur',
    img: 'bulbasaur-front.png',
    backgroundPosition:'-22px -22px',
    backgroundSize:  '80px 80px',
    damage: 3,
    evolution: 2,
  },

  {
    id: 2,
    name: 'Ivysaur',
    img: 'ivysaur-front.png',
    backgroundPosition:'-15px -15px',
    backgroundSize:  '60px 60px',
    damage: 6,
    evolution: 3,
  },

  {
    id: 3,
    name: 'Venusaur',
    img: 'venusaur-front.png',
    backgroundPosition: '-3px -3px',
    backgroundSize: '40px 40px',
    damage: 14,
  },

  {
    id: 4,
    name: 'Charmander',
    img: 'charmander-front.png',
    backgroundPosition: '-20px -20px',
    backgroundSize: '70px 70px',
    damage: 3,
    evolution: 5,
  },

  {
    id: 5,
    name: 'Charmeleon',
    img: 'charmeleon-front.png',
    backgroundPosition: '-13px -13px',
    backgroundSize: '58px 58px',
    damage: 7,
    evolution: 6,
  },

  {
    id: 6,
    name: 'Charizard',
    img: 'charizard-front.png',
    backgroundPosition: '-5px -9px',
    backgroundSize: '45px 45px',
    damage: 17,
  },

  {
    id: 7,
    name: 'Squirtle',
    img: 'squirtle-front.png',
    backgroundPosition: '-22px -22px',
    backgroundSize: '75px 75px',
    damage: 3,
    evolution: 8,
  },

  {
    id: 8,
    name: 'Wartortle',
    img: 'wartortle-front.png',
    backgroundPosition: '-12px -13px',
    backgroundSize: '55px 55px',
    damage: 6,
    evolution: 9,
  },

  {
    id: 9,
    name: 'Blastoise',
    img: 'blastoise-front.png',
    backgroundPosition: '-8px -8px',
    backgroundSize: '50px 50px',
    damage: 16,
  },

  {
    id: 10,
    name: 'Caterpie',
    img: 'caterpie-front.png',
    backgroundPosition: '-20px -20px',
    backgroundSize: '70px 70px',
    damage: 2,
    evolution: 11,
  },

  {
    id: 11,
    name: 'Metapod',
    img: 'metapod-front.png',
    backgroundPosition: '-20px -18px',
    backgroundSize: '70px 70px',
    damage: 4,
    evolution: 12,
  },

  {
    id: 12,
    name: 'Butterfree',
    img: 'butterfree-front.png',
    backgroundPosition: '-8px -8px',
    backgroundSize: '50px 50px',
    damage: 6,
  },

  {
    id: 13,
    name: 'Weedle',
    img: 'weedle-front.png',
    backgroundPosition: '-22px -20px',
    backgroundSize: '70px 70px',
    damage: 2,
    evolution: 14,
  },

  {
    id: 14,
    name: 'Kakuna',
    img: 'kakuna-front.png',
    backgroundPosition: '-18px -20px',
    backgroundSize: '70px 70px',
    damage: 3,
    evolution: 15,
  },

  {
    id: 15,
    name: 'Beedrill',
    img: 'beedrill-front.png',
    backgroundPosition: '-10px -10px',
    backgroundSize: '53px 53px',
    damage: 8,
  },

  {
    id: 16,
    name: 'Pidgey',
    img: 'pidgey-front.png',
    backgroundPosition: '-20px -19px',
    backgroundSize: '70px 70px',
    damage: 3,
    evolution: 17,
  },

  {
    id: 17,
    name: 'Pidgeotto',
    img: 'pidgeotto-front.png',
    backgroundPosition:'-15px -15px',
    backgroundSize:  '60px 60px',
    damage: 5,
    evolution: 18,
  },

  {
    id: 18,
    name: 'Pidgeot',
    img: 'pidgeot-front.png',
    backgroundPosition:'-7px -7px',
    backgroundSize:  '48px 48px',
    damage: 8,
  },

  {
    id: 19,
    name: 'Rattata',
    img: 'rattata-front.png',
    backgroundPosition:'-22px -22px',
    backgroundSize:  '80px 80px',
    damage: 3,
    evolution: 20,
  },

  {
    id: 20,
    name: 'Raticate',
    img: 'raticate-front.png',
    backgroundPosition:'-15px -15px',
    backgroundSize:  '60px 60px',
    damage: 6,
  },

  {
    id: 21,
    name: 'Spearow',
    img: 'spearow-front.png',
    backgroundPosition:'-22px -22px',
    backgroundSize:  '80px 80px',
    damage: 3,
    evolution: 22,
  },

  {
    id: 22,
    name: 'Fearow',
    img: 'fearow-front.png',
    backgroundPosition: '-5px -5px',
    backgroundSize: '45px 45px',
    damage: 7,
  },

  {
    id: 23,
    name: 'Ekans',
    img: 'ekans-front.png',
    backgroundPosition: '-17px -17px',
    backgroundSize: '65px 65px',
    damage: 4,
    evolution: 24,
  },

  {
    id: 24,
    name: 'Arbok',
    img: 'arbok-front.png',
    backgroundPosition: '-4px -6px',
    backgroundSize: '45px 45px',
    damage: 7,
  },

  {
    id: 25,
    name: 'Pikachu',
    img: 'pikachu-front.png',
    backgroundPosition: '-18px -17px',
    backgroundSize: '65px 65px',
    damage: 3,
    evolution: 26,
  },

  {
    id: 26,
    name: 'Raichu',
    img: 'raichu-front.png',
    backgroundPosition: '-5px -6px',
    backgroundSize: '45px 45px',
    damage: 5,
  },

  {
    id: 41,
    name: 'Zubat',
    img: 'zubat-front.png',
    backgroundPosition: '-15px -18px',
    backgroundSize: '65px 65px',
    damage: 3,
    evolution: 42,
  },

  {
    id: 42,
    name: 'Golbat',
    img: 'golbat-front.png',
    backgroundPosition: '-7px -6px',
    backgroundSize: '45px 45px',
    damage: 5,
  },

  {
    id: 50,
    name: 'Diglett',
    img: 'diglett-front.png',
    backgroundPosition: '-23px -22px',
    backgroundSize: '75px 75px',
    damage: 2,
    evolution: 51,
  },

  {
    id: 51,
    name: 'Dugtrio',
    img: 'dugtrio-front.png',
    backgroundPosition: '-17px -17px',
    backgroundSize: '65px 65px',
    damage: 5,
  },

  {
    id: 77,
    name: 'Ponyta',
    img: 'ponyta-front.png',
    backgroundPosition: '-15px -15px',
    backgroundSize: '60px 60px',
    damage: 5,
    evolution: 78,
  },

  {
    id: 78,
    name: 'Rapidash',
    img: 'rapidash-front.png',
    backgroundPosition: '-7px -7px',
    backgroundSize: '45px 45px',
    damage: 8,
  },

  {
    id: 95,
    name: 'Onix',
    img: 'onix-front.png',
    backgroundPosition: '-5px -5px',
    backgroundSize: '45px 45px',
    damage: 7,
  },

  {
    id: 102,
    name: 'Exeggcute',
    img: 'exeggcute-front.png',
    backgroundPosition: '-12px -11px',
    backgroundSize: '55px 55px',
    damage: 3,
    evolution: 103,
  },

  {
    id: 103,
    name: 'Exeggutor',
    img: 'exeggutor-front.png',
    backgroundPosition: '-7px -8px',
    backgroundSize: '45px 45px',
    damage: 15,
  },

  {
    id: 107,
    name: 'Hitmonchan',
    img: 'hitmonchan-front.png',
    backgroundPosition: '-12px -11px',
    backgroundSize: '55px 55px',
    damage: 5,
  },

  {
    id: 109,
    name: 'Koffing',
    img: 'koffing-front.png',
    backgroundPosition: '-12px -14px',
    backgroundSize: '55px 55px',
    damage: 5,
    evolution: 110,
  },

  {
    id: 110,
    name: 'Weezing',
    img: 'weezing-front.png',
    backgroundPosition: '-11px -12px',
    backgroundSize: '50px 50px',
    damage: 7,
  },

  {
    id: 111,
    name: 'Rhyhorn',
    img: 'rhyhorn-front.png',
    backgroundPosition: '-8px -10px',
    backgroundSize: '48px 48px',
    damage: 7,
    evolution: 112,
  },

  {
    id: 112,
    name: 'Rhydon',
    img: 'rhydon-front.png',
    backgroundPosition: '-8px -10px',
    backgroundSize: '48px 48px',
    damage: 10,
  },

  {
    id: 124,
    name: 'Jynx',
    img: 'jynx-front.png',
    backgroundPosition: '-8px -9px',
    backgroundSize: '50px 50px',
    damage: 6,
  },

  {
    id: 129,
    name: 'Magikarp',
    img: 'magikarp-front.png',
    backgroundPosition: '-16px -16px',
    backgroundSize: '65px 65px',
    damage: 1,
    evolution: 130,
  },

  {
    id: 130,
    name: 'Gyarados',
    img: 'gyarados-front.png',
    backgroundPosition: '-4px -4px',
    backgroundSize: '38px 38px',
    damage: 17,
  },

  {
    id: 131,
    name: 'Lapras',
    img: 'lapras-front.png',
    backgroundPosition: '-7px -6px',
    backgroundSize: '43px 43px',
    damage: 17,
  },

  {
    id: 133,
    name: 'Eevee',
    img: 'eevee-front.png',
    backgroundPosition:'-20px -18px',
    backgroundSize:  '70px 70px',
    damage: 4,
    evolution: 134,
  },

  {
    id: 134,
    name: 'Vaporeon',
    img: 'vaporeon-front.png',
    backgroundPosition:'-12px -13px',
    backgroundSize:  '60px 60px',
    damage: 16,
  },

  {
    id: 143,
    name: 'Snorlax',
    img: 'snorlax-front.png',
    backgroundPosition:'-9px -8px',
    backgroundSize:  '45px 45px',
    damage: 18,
  },

  {
    id: 150,
    name: 'Mewto',
    img: 'mewto-front.png',
    backgroundPosition: '-9px -8px',
    backgroundSize: '45px 45px',
    damage: 19,
  },

  {
    id: 151,
    name: 'Mew',
    img: 'mew-front.png',
    backgroundPosition:'-16px -15px',
    backgroundSize:  '60px 60px',
    damage: 15,
  },
/*
  {
    id: 152,
    name: 'Treecko',
    img: 'treecko-front.png',
    backgroundPosition: '-12px -14px',
    backgroundSize: '55px 55px',
    damage: 5,
    evolution: 153,
  },

  {
    id: 153,
    name: 'Grovyle',
    img: 'grovyle-front.png',
    backgroundPosition: '-10px -9px',
    backgroundSize: '50px 50px',
    damage: 6,
    evolution: 154,
  },

  {
    id: 154,
    name: 'Sceptile',
    img: 'sceptile-front.png',
    backgroundPosition: '-3px -3px',
    backgroundSize: '40px 40px',
    damage: 7,
  },
*/
];

module.exports = function (state) {
  if (state === undefined) state = initialState;
  return state;
}
