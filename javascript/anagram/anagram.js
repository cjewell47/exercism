var Anagram = function(word) {
  this.word        = word.toLowerCase();
  this.matches     = matches;
};

function matches(args) {
  var argumentArray = typeof args === 'string' ? [].slice.apply(arguments) : args;
  var anagrams = [];
  var ordered  = this.word.split('').sort().join('');
  argumentArray.forEach(item => {
    if(isMatch(item) && item.toLowerCase() !== this.word) {
      anagrams.push(item);
    }
  });

  function isMatch(input) {
    return ordered === input.toLowerCase().split('').sort().join('');
  }
  return anagrams;
}

module.exports = Anagram;
