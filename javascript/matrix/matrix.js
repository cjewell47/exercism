const Matrix   = function(string) {
  const toRows    = string.split('\n');
  const splitRows = toRows.map(row => row.split(' '));
  this.rows       = splitRows.map(row => row.map(item => parseInt(item)));
  this.columns    = [];
  for(let i = 0; i < this.rows.length; i++) {
    this.columns[i] = [];
    this.rows.forEach(row => this.columns[i].push(row[i]));
  }
};

module.exports = Matrix;
