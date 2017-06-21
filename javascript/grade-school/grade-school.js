var School = function() {
  this.add    = add;
  this.roster = roster;
  this.grade  = grade;

  const students = {};

  function add(name, grade) {
    if(grade in students) {
      students[grade].push(name);
      students[grade].sort();
    } else {
      students[grade] = [name];
    }
  }

  function roster() {
    return students;
  }

  function grade(i) {
    if(i in students) {
      return students[i].sort();
    } else {
      return [];
    }
  }


};

module.exports = School;
