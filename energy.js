var exports = module.exports = {};

//use this prototype to create the other functions
exports.kineticEnergy = function(m,v){
  let ke = 0.5*m*v*v;
  return ke;
};
exports.mass = function(ke,v){
  let m = (2*ke)/v*v;
  return m;
};
exports.velocity = function(m,ke){
  let v = Math.sqrt((2*ke)/m)
  return v;
};
