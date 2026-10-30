function add(num1 = 0, num2 = 0, num3 = 0) {
    let result = num1 + num2 + num3;
    return result;
}

//let add_result = add(12, 12, 12);
//let add_result = add(12, 12, "12"); //2412
let add_result = add("12", 12, 12); //121212
console.log("Output : " + add_result);