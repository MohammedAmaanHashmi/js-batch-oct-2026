let apiResponse = {
  "status": 200,
  "message": "Sucesss",
  "data": {
    "users": [
      { "id": 1, "name": "Ramesh", "isQA": true },
      { "id": 2, "name": "Suresh", "isQA": false },
      { "id": 3, "name": "Dinesh", "isQA": true },
    ],
  },
};

//Task 1
console.log("Name of all users who are QA: ");
for (let i = 0; i < apiResponse.data.users.length; i++) {
  console.log(apiResponse.data.users[i].name);
}

//Task 2
let count = 0;
for (let i = 0; i < apiResponse.data.users.length; i++) {
  if (apiResponse.data.users[i].isQA === true) {
    count++;
  }
}

console.log("Count how many users have isQA: true ", count);

//Task 3
console.log("origianl users object: ", apiResponse.data.users);
apiResponse.data.users.push({ "id": 4, "name": "Amaan", "isQA": true });
console.log("updated users object: ", apiResponse.data.users);

//Task 4
console.log("Total Number of users: " + apiResponse.data.users.length);
