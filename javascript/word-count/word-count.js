var Words = function() {
  this.count = count;
};

function count(sentence) {
  var stripped = sentence.replace(/[~`!¡@#$%^&*(){}\[\];:"<.>?¿\/\\|_+=-]/g,'');
  stripped = stripped.replace(/[\t\n]/g,' ');
  var splitWords = stripped.split(/[ ,]+/);
  splitWords = splitWords.map(x =>
  x.toLowerCase().replace(/^'(.+(?='$))'$/, '$1'));
  var output = {};
  for (var i = 0; i < splitWords.length; i++){
    var value = splitWords[i];
    if(value in output) {
      output[value] += 1;
    } else {
      output[value] = 1;
    }
  }
  return output;
}

module.exports = Words;
