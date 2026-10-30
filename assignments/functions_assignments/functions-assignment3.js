function convertTemperature(value, type) {
  let data = type.toLowerCase();
  let result;
  if (typeof value == "number" && (data == "c" || data == "f")) {
    console.log("Valid value and type");
    if (data.toLowerCase() == "c") {
      result = ((value - 32) * 5) / 9;
    } else {
      result = (value * 9) / 5 + 32;
    }
  } else {
    return "Invalid input and type";
  }

  return result.toFixed(2);
}
let result = convertTemperature(100, "C");
console.log("output: " + result);

result = convertTemperature(0, "F");
console.log("output: " + result);
console.log(convertTemperature(10, "K"));
console.log(convertTemperature("abc", "C"));
