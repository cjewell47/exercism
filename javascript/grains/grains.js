var BigInt = require('./big-integer');

var Grains = function() {
  this.square = square;
  this.total  = total;
};

function square(x) {
  return BigInt(2).pow(x-1).toString();
}

function total() {
  return BigInt(2).pow(64).subtract(1).toString();
}

module.exports = Grains;
