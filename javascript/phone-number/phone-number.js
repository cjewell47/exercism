var PhoneNumber = function(input) {
  this.input    = input;
  this.number   = number;
  this.areaCode = areaCode;
  this.toString = toString;
};

function number() {
  var strippedNumber = removeCharacters(this.input);
  if(strippedNumber.length === 10) {
    return strippedNumber;
  } else if (strippedNumber.length === 11 && strippedNumber[0] === '1') {
    return strippedNumber.slice(1);
  } else {
    return '0000000000';
  }
}

function removeCharacters(num) {
  return num.replace(/[\s.)(-]/g,'');
}

function areaCode() {
  var num = this.number();
  return num.slice(0, 3);
}

function toString() {
  var num = this.number();
  return '(' + this.areaCode(num) + ') ' + num.slice(3, 6) + '-' + num.slice(6, 10);
}

module.exports = PhoneNumber;
