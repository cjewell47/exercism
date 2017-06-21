var FoodChain = function() {
  this.verse  = verse;
  this.verses = verses;
};

const lyrics = {
  'fly': 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.',
  'spider': 'It wriggled and jiggled and tickled inside her.',
  'bird': 'How absurd to swallow a bird!',
  'cat': 'Imagine that, to swallow a cat!',
  'dog': 'What a hog, to swallow a dog!',
  'goat': 'Just opened her throat and swallowed a goat!',
  'cow': 'I don\'t know how she swallowed a cow!',
  'horse': 'She\'s dead, of course!'
};

function verses(a, b) {
  let song = '';
  for(let i = a; i <= b; i++) {
    song += this.verse(i) + '\n';
  }
  return song;
}

function verse(v) {
  const animal = Object.keys(lyrics)[v -1];
  const lyric  = lyrics[animal];
  let song = 'I know an old lady who swallowed a ' + animal + '.\n';
  song += lyric + '\n';

  if (v < Object.keys(lyrics).length) {
    for(let i = v -1; i > 0; i--) {
      const previousAnimal = Object.keys(lyrics)[i -1];
      const currentAnimal = Object.keys(lyrics)[i];
      song += 'She swallowed the ' +  currentAnimal + ' to catch the ' + previousAnimal;
      previousAnimal === 'spider' ? song += ' that wriggled and jiggled and tickled inside her.\n' : song += '.\n';
    }
    if (v > 1) {
      const firstAnimal = Object.keys(lyrics)[0];
      song += lyrics[firstAnimal] + '\n';
    }
  }
  return song;
}

module.exports = FoodChain;
