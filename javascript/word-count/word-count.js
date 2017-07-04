var Words = function() {
  this.count = count;
};

function count(sentence) {
  var stripped = strip(sentence);
  stripped = removeTabAndLine(stripped);
  var splitWords = stripped.split(/[ ,]+/);
  splitWords = splitWords.map(x =>
  removeQuotes(x).toLowerCase());
  var output = {};
  for (var i = 0; i < splitWords.length; i++){
    var value = splitWords[i];
    if(value.length !== 0 && value in output) {
      output[value] += 1;
    } else if (value.length !== 0 && !(value in output)) {
      output[value] = 1;
    }
  }
  return output;
}

function strip(x) {
  return x.replace(/[~`!¡@#$%^&*(){}\[\];:"<.>?¿\/\\|_+=-]/g,'');
}

function removeTabAndLine(x) {
  return x.replace(/[\t\n]/g,' ');
}

function removeQuotes(x) {
  return x.replace(/^'(.+(?='$))'$/, '$1');
}

module.exports = Words;
