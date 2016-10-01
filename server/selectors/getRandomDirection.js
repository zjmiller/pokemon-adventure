module.exports = function getRandomDirection(){
  const directions = ['left', 'up', 'right', 'down'];
  const ranI = Math.floor(Math.random() * 4);
  return directions[ranI];
}
