class Student {
  name;
  age;
  email;
  phone;
  #address;

  //private fields can be accessed only through class members


  //this is reference keyword
  //this mean current object

  constructor(
    name = "Student",
    age = 18,
    email = "student@gmail.com",
    phone = 9867818890,
    address = "Banglore",
  ) {
    console.log("#### Constructor called ####");

    this.name = name;
    this.age = age;
    this.email = email;
    this.phone = phone;
    this.#address = address;

    console.log("#### Value Assigned ####");
  }

  // getter method - means which will help you to get the values
  // setter method - means which will help you to set the values

  getLocation() {
    return this.#address;
  }

  setLocation(location) {
    this.#address = location;
  }
}

const s1 = new Student("Aditya", 20, "aditya@gmail.com", 98765733,"Pune");
console.log(s1.age);
console.log(s1.name);
console.log(s1.getLocation());
