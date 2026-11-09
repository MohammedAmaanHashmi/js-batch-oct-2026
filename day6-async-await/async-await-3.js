import fs from "fs/promises";

console.log("Started");

/*
Even if one task or statement have await then that function should be async function

if you call normal function or method no need to put await while  calling then

If you call async funciton or method it is must to use await
*/
async function readDataFromFile() {
  const fileContext = await fs.readFile("Sample.txt", "utf-8");
  return fileContext;
}

const data = await readDataFromFile();
console.log(data);

console.log("End");
