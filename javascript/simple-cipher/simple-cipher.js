const Cipher = function(key) {
  if(key === '' || (key && key.toUpperCase() === key)) {
    throw Error('Bad key');
  }
  this.alphabet          = alphabet;
  this.encode            = encode;
  this.decode            = decode;
  this.generateKey       = generateKey;
  this.key               = key || this.generateKey();
};

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const encode = function(text) {
  const characters = text.split('');
  const encoded    = [];
  const self       = this;
  characters.forEach(function(character, index) {
    let newIndex = alphabet.indexOf(character) +
    alphabet.indexOf(self.key[index]);
    if(newIndex >= alphabet.length) {
      newIndex -= alphabet.length;
    }
    encoded.push(alphabet[newIndex]);
  });
  return encoded.join('');
};

const decode = function(cipher) {
  const characters = cipher.split('');
  const decoded    = [];
  const self       = this;
  characters.forEach(function(character,index) {
    let newIndex = alphabet.indexOf(character) -
    alphabet.indexOf(self.key[index]);
    if(newIndex < 0) {
      newIndex += alphabet.length;
    }
    decoded.push(alphabet[newIndex]);
  });
  return decoded.join('');
};

const generateKey = function() {
  let randomKey = '';
  for(let i = 0; i < 500; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    randomKey += alphabet[randomIndex];
  }
  return randomKey;
};

module.exports = Cipher;
