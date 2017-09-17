var f = [];
function factorial(n) {
  if(n === 0 || n === 1) {
    return 1;
  }
  if(f[n] > 0) {
    return f[n];
  }
  return f[n] = factorial(n-1) * n;
}

var Triangle = function(rowCount) {
  this.rowCount = rowCount;
  this.generateRows();
  return this;
};

Triangle.prototype.cellValue = function(n, k) {
  return factorial(n) / factorial(k) / factorial(n - k);
};

Triangle.prototype.generateRows = function() {
  this.rows = [];
  for(var i = 0; i < this.rowCount; i++) {
    var row = [];
    for(var x = 0; x < i + 1; x++) {
      row.push(this.cellValue(i, x));
    }
    this.rows.push(row);
  }
  this.lastRow = this.rows[this.rows.length - 1];
};

module.exports = Triangle;
