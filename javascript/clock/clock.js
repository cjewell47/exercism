
var Clock = function(hour, min) {
  this.hour = hour;
  if (min === undefined) {
    min = 0;
  }
  this.min = min;
  this.hour %= 24;
  if(this.min >= 60) {
    this.hour += Math.floor(this.min / 60);
    this.hour %= 24;
  }
  this.min  %= 60;
  this.hourString = () => {
    return correctDigits(this.hour);
  };
  this.minString = () => {
    return correctDigits(this.min);
  };
  this.toString = () => {
    return this.hourString() + ':' + this.minString();
  };
  this.plus   = plus;
  this.minus  = minus;
  this.equals = equals;
};

function plus(min) {
  this.min += min;
  this.hour += Math.floor(this.min / 60);
  this.hour %= 24;
  this.min %= 60;
  return this;
}

function minus(min) {
  var hour = Math.floor(min / 60);
  min = min % 60;
  if (this.min < min) {
    this.min = this.min + 60 - min;
    this.hour = (this.hour + 24 - 1 - hour) % 24;
  } else {
    this.min  -= min;
    this.hour -= hour;
  }
  return this;
}

function equals(clock) {
  return this.toString() === clock.toString();
}

function correctDigits(n) {
  var s = String(n);
  s.length === 1 ? s = '0' + s : s;
  return s;
}

function at(hour, min) {
  return new Clock(hour, min);
}

module.exports.at = at;
