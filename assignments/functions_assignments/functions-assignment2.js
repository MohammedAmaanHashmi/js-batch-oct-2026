function containsVowels(inputString) {
  let value = inputString.toLowerCase();
  let data = "";
  if (
    value.includes("a") ||
    value.includes("e") ||
    value.includes("i") ||
    value.includes("o") ||
    value.includes("u")
  ) {
    data = "Vowel found";
  } else {
    data = "No vowel found";
  }
  return data;
}

let result = containsVowels("Mukesh");
console.log("Output: " + result);

result = containsVowels("Rhythm");
console.log("Output: " + result);

result = containsVowels("AUTOMATION");
console.log("Output: " + result);
