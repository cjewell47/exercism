var BeerSong = function() {
  this.verse = verse;
  this.sing  = sing;
};

function verse(i) {
  if(i === 2) {
    return `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i -1} bottle of beer on the wall.\n`;
  } else if (i === 1) {
    return `${i} bottle of beer on the wall, ${i} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;
  } else if (i === 0) {
    return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
  } else {
    return `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i -1} bottles of beer on the wall.\n`;
  }
}

function sing(a, b) {
  var end = b === undefined ? 0 : b;
  var result = '';
  for (var i = a; i > end - 1; i--) {
    var verse = i === end ? this.verse(i) : this.verse(i) + '\n';
    result += verse;
  }
  return result;
}

module.exports = BeerSong;
