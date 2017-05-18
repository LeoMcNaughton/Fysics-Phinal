var exports = module.exports = {};

//use this prototype to create the other functions
exports.kineticEnergy = function(m,v){
  let ke = 0.5*m*v*v;
  return ke;
};
exports.mass = function(){
  let m = (2*k)/v*v;
  return m;
};
exports.velocity = function(){
  let v = Math.sqrt((2*k)/m)
  return v;
};
