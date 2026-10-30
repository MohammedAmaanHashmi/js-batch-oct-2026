let arr = [5, 15, 20, 31, 50, 61];
let adults = [];
let kids = [];

arr.forEach(function (x) {
  // console.log(x);
  if (x > 18) {
    adults.push(x);
  } else {
    kids.push(x);
  }
});
console.log("Adults: " + adults);
console.log("Kids: " + kids);
