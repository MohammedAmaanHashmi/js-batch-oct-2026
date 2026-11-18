class Student {
  name;
  age;
  email;
  phone;

  //this is reference keyword
  //this mean current object

  constructor(
    name = "Student",
    age = 18,
    email = "student@gmail.com",
    phone = 9867818890,
  ) {
    console.log("#### Constructor called ####");

    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;

    console.log("#### Value Assigned ####");
  }

  /* A class can have only 1 constructor */

  // constructor(name="NA", age=21, email="na@gmail.com", phone=986782345) {
  //   console.log("#### Constructor called ####");

  //   this.name = name;
  //   this.age = age;
  //   this.email = email;
  //   this.phone = phone;

  //   console.log("#### Value Assigned ####");
  // }

  // submitAssignment() {
  //   console.log("Student can submit the assignments");
  // }
}
const student1 = new Student("Udhav", 20);
const student2 = new Student("Mukesh", 35, "mukesh@gmail.com", 986781232);
const student3 = new Student("Mukesh", 35, "mukesh@gmail.com", 986781232, [
  "Playwright",
  "Cypress",
  "Selenium",
]);
console.log(student1);
//console.log(student2);
//console.log(student3);
