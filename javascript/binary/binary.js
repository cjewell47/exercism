const Binary = function(num) {
  this.num       = num;
  this.toDecimal = toDecimal;
};

const toDecimal = function() {
  const length = this.num.length;
  let decimal  = 0;
  for(let i = length; i > 0; i--){
    if(this.num[i-1] !== '0' && this.num[i-1] !== '1') {
      return 0;
    } else {
      const power      = length - i;
      const multiplier = Math.pow(2, power);
      decimal += (this.num[i-1] * multiplier);
    }
  }
  return decimal;
};

module.exports = Binary;
