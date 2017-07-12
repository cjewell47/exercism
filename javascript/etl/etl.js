var ETL = function() {
  this.transform = transform;
};

function transform(input) {
  var output = {};
  Object.keys(input).forEach(key =>
    input[key].forEach(value =>
      output[value.toLowerCase()] = parseInt(key)));
  return output;
}

module.exports = ETL;
