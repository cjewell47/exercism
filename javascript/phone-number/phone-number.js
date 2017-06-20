var PhoneNumber = function(input) {
  this.input    = input;
  this.number   = number;
  this.areaCode = areaCode;
  this.toString = toString;
};

function number() {
  var stripped = this.input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').replace(/\s/g,'');
  if(stripped.length === 10) {
    return stripped;
  } else if (stripped.length === 11 && stripped[0] === '1') {
    return stripped.slice(1);
  } else {
    return '0000000000';
  }
}

function areaCode() {
  var num = this.number();
  return num.slice(0, 3);
}

function toString() {
  var num = this.number();
  return '(' + num.slice(0, 3) + ') ' + num.slice(3, 6) + '-' + num.slice(6, 10);
}

module.exports = PhoneNumber;
