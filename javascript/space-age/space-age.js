var SpaceAge = function(secs) {
  this.seconds = secs;
  this.onEarth = () => {
    this.earthYears = this.seconds / (60 * 60 * 24 * 365.25);
    return format(this.earthYears);
  };
  this.onMercury = onMercury;
  this.onVenus   = onVenus;
  this.onMars    = onMars;
  this.onJupiter = onJupiter;
  this.onSaturn  = onSaturn;
  this.onUranus  = onUranus;
  this.onNeptune = onNeptune;
};

function onMercury() {
  return format(this.earthYears / 0.2408467);
}

function onVenus() {
  return format(this.earthYears / 0.61519726);
}

function onMars() {
  return format(this.earthYears / 1.8808158);
}

function onJupiter() {
  return format(this.earthYears / 11.862615);
}

function onSaturn() {
  return format(this.earthYears / 29.447498);
}

function onUranus() {
  return format(this.earthYears / 84.016846);
}

function onNeptune() {
  return format(this.earthYears / 164.79132);
}

function format(x) {
  return parseFloat(x.toFixed(2));
}

module.exports = SpaceAge;
