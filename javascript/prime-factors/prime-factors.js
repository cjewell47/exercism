const primeFactors = {};

primeFactors.for = function(x) {
  const factors = [];
  let factor    = 2;
  while(x !== 1) {
    if(x % factor === 0) {
      factors.push(factor);
      x /= factor;
    } else {
      factor++;
    }
  }
  return factors;
};

module.exports = primeFactors;
