let course = {
  "title": "JavaScript for QA",
  "duration": "6 weeks",
  "topics": ["Variables", "Loops", "Functions"],
  "isPaid": true,
};

console.log("Orignal Array: " + course.topics);
course.topics.push("Objects");
console.log("Updated Array: " + course.topics);

console.log("Orignal Duration: " + course.duration);
course.duration = "8 weeks";
console.log("Updated Duration: " + course.duration);

console.log("Number of topics covered: " + course.topics.length);

if (course.isPaid) {
  console.log("This is a premium course");
}
