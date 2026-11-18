class Student {
  name;
  age;
  email;
  phone;

  //this is reference keyword
  //this mean current object

  constructor(name, age, email, phone) {
    console.log("#### Constructor called ####");

    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;

    console.log("#### Value Assigned ####");
  }

  submitAssignment() {
    console.log("Student can submit the assignments");
  }
}
const student1 = new Student("Udhav", 20, "udhav@gmail.com", 986818890);
const student2 = new Student("Snehal", 20, "snehal@gmail.com", 986818890);
const student3 = new Student("Umaish", 20, "umaish@gmail.com", 986818890);
const student4 = new Student("Amruta", 20, "amruta@gmail.com", 986818890);
const student5 = new Student("Abhay", 20, "abhay@gmail.com", 986818890);

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);
