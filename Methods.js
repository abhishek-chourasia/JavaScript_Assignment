// Filter 
var filterSubject = function(teachers, subject) {
    var filteredTeachers = [];
    for (var i=0; i<=teachers.length-1; i++) {
      var teacher = teachers[i];
      for (var j=0; j<=teacher.subjects.length-1; j++) {
        if (teacher.subjects[j].toLowerCase()== subject.toLowerCase()) {
          filteredTeachers.push(teacher);
        }
      }
    }
    return filteredTeachers;
  }

// Reduce
const sortingReducer = (accumulator, value) => {
  const nextIndex = accumulator.findIndex(i => value < i );
  const index = nextIndex > -1 ? nextIndex : accumulator.length;
  accumulator.splice(index, 0, value);
  return accumulator;
}

const input = [5,4,9,1];
const output = input.reduce(sortingReducer, []);

// forEach
Array.prototype.myEach = function myEach(callback) {
  for (let i = 0; i < this.length; i += 1) {
    if (this.hasOwnProperty(i)) {
      callback(this[i], i, this);
    }
  }
};