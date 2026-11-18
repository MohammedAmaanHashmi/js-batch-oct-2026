class Student {
  submitAssignment() {
    console.log("Student can submit the assignments");
  }
}

const s1 = new Student();
s1.age = "25";
s1.name = "Amit";
s1.email = "amit@gmail.com";
//console.log(s1);
console.log(s1.age + " " + s1.email);

const s2 = new Student();
s2.age = "28";
s2.name = "hary";
s2.email = "hary@gmail.com";
s2.skills = ["GenAI", "Playwright", "Selenium"];
//console.log(s2);
console.log(s2.age + " " + s2.email);

s2.age = "29";
console.log(s2.age + " " + s2.email);
