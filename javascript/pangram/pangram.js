var Pangram = function(string) {
  this.string = string;
  this.isPangram = isPangram;
};

function isPangram() {
  var abc   = 'abcdefghijklmnopqrstuvwxyz';
  var lower = this.string.toLowerCase();
  var count = 0;
  for(let i = 0; i < abc.length; i++){
    if(lower.indexOf(abc[i]) === -1 ) {
      count =+ 1;
    }
  }
  if(count === 0){
    return true;
  } else {
    return false;
  }
}

module.exports = Pangram;
