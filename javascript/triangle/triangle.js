var Triangle = function(a, b, c) {
  this.triangle = [a, b, c].sort();
  this.l = this.triangle[2];
  this.m = this.triangle[1];
  this.s = this.triangle[0];
  this.kind = kind;

};

function kind() {
  if(this.l <= 0 || this.s <= 0) {
    throw 'Triangles without positive sides are not allowed';
  } else if (this.s + this.m < this.l || this.l + this.s < this.m) {
    throw 'Not a valid triange';
  } else {
    if(this.s === this.m && this.m === this.l) {
      return 'equilateral';
    } else if (this.s === this.m || this.m === this.l) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}


module.exports = Triangle;
