var Gigasecond = function(input) {
  this.startDate = input;
  this.date = date;
};

function date() {
  var startTime = this.startDate.getTime();
  var endDate = new Date(startTime + 1000000000000);
  return endDate;
}

module.exports = Gigasecond;
