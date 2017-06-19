var Bob = function() {
  this.hey = hey;
};

function hey(string) {
  if(string === string.toUpperCase() && string.toUpperCase() !== string.toLowerCase()) {
    return 'Whoa, chill out!';
  } else if ('?' === string.slice(-1)) {
    return 'Sure.';
  } else if (!string.replace(/\s/g, '').length) {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }
}

module.exports = Bob;
