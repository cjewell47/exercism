var Hamming = function(input) {
//
  this.hamming = input;
};

Hamming.prototype.compute = function(a, b) {
  if(a.length !== b.length) {
    throw Error('DNA strands must be of equal length.');
  } else {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        count+=1;
      }
    }
    return count;
  }
};

module.exports = Hamming;
