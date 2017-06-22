var ETL = function() {
  this.transform = transform;
};

function transform(input) {
  var output = {};
  Object.keys(input).map(key =>
    input[key].map(value =>
      output[value.toLowerCase()] = parseInt(key)
    )
  );
  return output;
}

module.exports = ETL;
