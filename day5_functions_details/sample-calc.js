console.log("Starting calc Module");

export function add(num1 = 0, num2 = 0) {
  let result = num1 + num2;
  return result;
}

export function sub(num1 = 0, num2 = 0) {
  let result = num1 - num2;
  return result;
}

export function div(num1 = 0, num2 = 0) {
  let result = num1 / num2;
  return result;
}

export function mul(num1 = 0, num2 = 0) {
  let result = num1 * num2;
  return result;
}

console.log("End calc Module");

//export { add, mul, div, sub }; this is also possible
