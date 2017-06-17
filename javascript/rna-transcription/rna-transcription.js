var DnaTranscriber = function() {
  this.toRna = toRna;
};

function toRna(input) {
  var output = [];
  for(let i = 0; i < input.length; i++) {
    switch(input[i]) {
      case 'G':
        output.push('C');
        continue;
      case 'C':
        output.push('G');
        continue;
      case 'T':
        output.push('A');
        continue;
      case 'A':
        output.push('U');
        continue;
      default:
        throw new Error('Invalid input');
    }
  }
  const rna = output.join('');
  return rna;
}

module.exports = DnaTranscriber;
