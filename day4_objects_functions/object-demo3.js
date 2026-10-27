//using object literals{}
//using classes - using oops
// Entry - Key value

let student = {
    "full name": "Dona Mohanty",
    "age": 25,
    "working": true,
    "skills": ["Playwright", "Selenium", "Cypress", "Tosca"],
    "address": [

        {
            "area": "JPNagar",
            "city": "BLR"
        },

        {
            "area": "MP Nager",
            "city": "Bhopal"
        },

        {
            "area": "New Market",
            "city": "Pune"
        }
    ]
}


console.log(student.address[0].city);