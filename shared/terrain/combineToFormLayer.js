module.exports = function combineToFormLayer(arr){
  const result = [];
  let counter = 0;

  arr.forEach(partialVLayer => {
    for (let i = 0; i < partialVLayer[0].length; i++) {
      result[counter] = [];
      partialVLayer.forEach(partialHLayer => {
        result[counter] = result[counter].concat(partialHLayer[i]);
      });
      counter++;
    }
  });

  return result;
}
