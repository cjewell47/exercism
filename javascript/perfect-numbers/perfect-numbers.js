const PerfectNumbers = function() {
  this.classify = classify;
};

function classify(n) {
  const divisors = [];
  for(let i = 0; i < n; i++) {
    if(n % i === 0) {
      divisors.push(i);
    }
  }
  if(n <= 0) {
    return 'Classification is only possible for natural numbers.';
  } else {
    var sum = 0;
    for(let i in divisors) {
      sum += divisors[i];
    }
    return sum === n ? 'perfect' : sum > n ? 'abundant' : 'deficient';
  }
}

module.exports = PerfectNumbers;
