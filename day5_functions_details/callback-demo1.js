let arr = [20, 31, 50, 61];

//arr.filter = Higher Order Funtion
//(num1)=> = Low order function or call back function
let values = arr.filter((num1) => {
  return num1 % 2 == 0;
});

console.log(values);
