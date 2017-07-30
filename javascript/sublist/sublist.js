function List(list) {
  this.list = list || [];
  this.compare = compare;
}


function compare(other) {
  return {
    '-1': isSublist(other.list, this.list)
    ? 'SUBLIST'
    : 'UNEQUAL',
    '1': isSublist(this.list, other.list)
    ? 'SUPERLIST'
    : 'UNEQUAL',
    '0': isSublist(other.list, this.list)
    ? 'EQUAL'
    : 'UNEQUAL'
  }[diffLength(this, other)];
}

function diffLength(one, two){
  return String(Math.sign(one.list.length - two.list.length));
}

function isSublist(one, two){
  return one.join().match(two.join());
}


module.exports = List;
