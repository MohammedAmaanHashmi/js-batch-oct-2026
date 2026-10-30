function add(num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
    let result = num1 + num2 + num3 + num4;
    return result;
}


function add(num1 = 0, num2 = 0) {
    let result = num1 + num2;
    return result;
}


let result = add(12, 13, 15, 25);
console.log("Output : " + result);