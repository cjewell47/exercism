const Robot = function() {
  this.start = () => {
    this.startName = generateName();
    this.startName in usedNames ? this.start() : this.name = this.startName;
    usedNames[this.name] = true;
  };

  this.reset = () => {
    this.start();
  };
  this.start();
};

const usedNames = {};
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function generateName() {
  return `${randomLetters()}` + `${randomNumbers()}`;
}

function randomLetters() {
  return letters[(Math.floor(Math.random() * letters.length))] +
  letters[(Math.floor(Math.random() * letters.length))];
}

function randomNumbers() {
  return `${Math.floor(Math.random() * 10)}`
  +`${Math.floor(Math.random() * 10)}`
  +`${Math.floor(Math.random() * 10)}`;
}

module.exports = Robot;
