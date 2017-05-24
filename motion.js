var exports = module.exports = {};

//use this prototype to create the other functions
exports.distance1 = function(v,t){
  let d = v *t;
  return d;
};
exports.distance2 = function(a,v,t){
  let d = 0.5 * a * t * t + v * t;
  return d;
};
exports.velocity1 = function(d,t){
  let v = d/t;
  return v;
};
exports.velocity2 = function(d,a,t){
  let v = (d-0.5*a*t*t)/t;
  return v;
};
exports.time1 = function(d,v){
  let t = d/v;
  return t;
};
exports.time2 = function(v,a,d){
  let t = v*v + 2*a*d;
  return t;
};
exports.acceleration = function(d,v,t){
  let a = 2*(d-v*t)/(t*t);
  return a;
};
