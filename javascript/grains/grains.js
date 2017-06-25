var BigInt = require('./big-integer');

var Grains = function() {
  this.square = square;
  this.total  = total;
};

function square(x) {
  return BigInt(2).pow(x-1).toString();
}

function total() {
  var sum = BigInt(0);
  for(var i = 0; i < 64; i++) {
    sum = sum.add(BigInt(2).pow(i));
  }
  return sum.toString();
}

module.exports = Grains;
