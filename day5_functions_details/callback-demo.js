let arr = [20, 31, 50, 61];

//arr.filter = Higher Order Funtion
//function(num1) = Low order function or call back function
let values = arr.filter(function (num1) {
  return num1 % 2 == 1;
});

console.log(values);
