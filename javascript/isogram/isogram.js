var Isogram = function(input) {
  this.input     = input.toLowerCase();
  this.isIsogram = isIsogram;
};

function isIsogram() {
  var stripped = this.input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').replace(/\s/g,'');
  var letters = {};
  for(let i = 0; i < stripped.length; i++) {
    var letter = stripped[i];
    if(letter in letters) {
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
  }
  var count = Object.values(letters);
  var sum = count.reduce((x, y) => x + y);
  if(sum === count.length) {
    return true;
  } else {
    return false;
  }
}

module.exports = Isogram;
