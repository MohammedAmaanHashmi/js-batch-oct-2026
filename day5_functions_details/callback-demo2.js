let arr = [20, 31, 50, 61];

//Example 1
// let values = arr.map(function (num1) {
//   return num1 + 5;
// });

//Example 2 arrow functions
let values = arr.map((num1) => {
  return num1 + 5;
});

console.log(values);
