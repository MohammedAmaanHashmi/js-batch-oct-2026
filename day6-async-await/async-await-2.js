import fs from "fs/promises";

console.log("Started");

const data = await fs.readFile("Sample.txt", "utf-8");

console.log(data);

console.log("End");
