const Robot = function() {
  this.name = `${randomLetter()}` + `${randomLetter()}` + `${randomNumber()}`;

  this.reset = () => {
    usedNames[this.name] = true;
    this.newName = `${randomLetter()}` + `${randomLetter()}` + `${randomNumber()}`;
    this.newName in usedNames ? this.reset() : this.name = this.newName;
  };
};

const usedNames = {};
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function randomLetter() {
  return letters.charAt(Math.floor(Math.random() * letters.length));
}

function randomNumber() {
  return `${Math.floor(Math.random() * 10)}`+`${Math.floor(Math.random() * 10)}`+`${Math.floor(Math.random() * 10)}`;
}

module.exports = Robot;
