var Cipher = function(key) {
  if(key === '') {
    throw ('Bad key');
  }
  this.key = key;
  this.encode = encode;


  var alphabet = 'abcdefghijklmnopqrstuvwxyz';

  function encode(text) {
    var characters = text.split('');
    var encoded = [ ];
    characters.forEach(function(character, index) {
      var newIndex = alphabet.indexOf(character) + alphabet.indexOf(this.key[index]);
      if (newIndex >= alphabet.length) {
        newIndex -= alphabet.length;
      }
      encoded.push(alphabet[newIndex]);
    });
    return encoded.join('');
  }

};

module.exports = Cipher;
