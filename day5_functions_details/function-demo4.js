// let add = function () {
//   console.log("Add Function called");
// };

// add();

let student = {
  "name": "Ram",
  "age": 25,
  greeting: function () {
    console.log("Details of students " + this.fname + " " + this.age);
  },
};

console.log(student.name);
console.log(student.age);
student.greeting();
