const Robot = function() {
  this.start = () => {
    this.startName = generateName();
    this.startName in usedNames ? this.start() : this.name = this.startName;
    usedNames[this.name] = true;
  };

  this.reset = () => {
    usedNames[this.name] = true;
    this.newName = generateName();
    this.newName in usedNames ? this.reset() : this.name = this.newName;
  };
  this.start();
};

const usedNames = {};
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function generateName() {
  return `${randomLetter()}` + `${randomLetter()}` + `${randomNumber()}`;
}

function randomLetter() {
  return letters.charAt(Math.floor(Math.random() * letters.length));
}

function randomNumber() {
  return `${Math.floor(Math.random() * 10)}`+`${Math.floor(Math.random() * 10)}`+`${Math.floor(Math.random() * 10)}`;
}

module.exports = Robot;
