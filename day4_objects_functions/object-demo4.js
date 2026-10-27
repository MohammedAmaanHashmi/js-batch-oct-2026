let emp = {
    "name": "Rajesh",
    "age": 30,
    "department": "QA"
}
console.log(emp);

emp.name = "Naresh";

// delete emp.department;
// delete emp not allowed
emp = {}; //deleting all the keys

console.log(emp);