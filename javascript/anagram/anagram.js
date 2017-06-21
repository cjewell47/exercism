var Anagram = function(word) {
  this.word        = word.toLowerCase();
  this.matches     = matches;
};

function matches(args) {
  var argumentArray = typeof args === 'string' ? [].slice.apply(arguments) : args;
  var subjectWord = this.word;
  var anagrams = [];
  var ordered  = orderWord(subjectWord);
  argumentArray.forEach(item => {
    if(isMatch(item) && differentWord(item)) {
      anagrams.push(item);
    }
  });

  function orderWord(input) {
    return input.split('').sort().join('');
  }

  function isMatch(input) {
    return ordered === orderWord(input.toLowerCase());
  }

  function differentWord(input) {
    return subjectWord !== input.toLowerCase();
  }

  return anagrams;
}

module.exports = Anagram;
