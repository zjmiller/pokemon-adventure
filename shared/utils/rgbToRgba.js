module.exports = function(rgbStr, aValue){
  return rgbStr.replace('rgb', 'rgba').replace(')', `,${aValue})`);
}
