//using object literals{}
//using classes - using oops
// Entry - Key value

let student = {
    "full name": "Dona Mohanty",
    "age": 25,
    "working": true,
    "skills": ["Playwright", "Selenium", "Cypress", "Tosca"],
    "address": {
        "location": "Jayanagar",
        "city": "BLR",
        "state": "KA",
        "pincode": 565748
    }
}


console.log(student.address.state);
// console.log(student["address"]["state"]);