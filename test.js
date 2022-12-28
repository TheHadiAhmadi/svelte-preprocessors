import { preprocess } from "svelte/compiler";
import { ifProcessor } from "./src/index.js";
import fs from "fs";
import path from "path";

const testsFolder = "tests";

const tests = fs.readdirSync(path.resolve(testsFolder));

let allCount = tests.length;
let successCount = 0;

await Promise.all(
  tests.map(async (test) => {
    const source = fs.readFileSync(
      path.resolve(testsFolder, test, "file.svelte"),
      "utf-8"
    );

    const output = await preprocess(source, ifProcessor());

    const expected = fs.readFileSync(
      path.resolve(testsFolder, test, "output.svelte"),
      "utf-8"
    );

    fs.writeFileSync(
      path.resolve(testsFolder, test, "last-run.svelte"),
      output.code
    );

    if (output.code === expected) successCount += 1;
  })
);

console.log("---------------------------------------");
console.log("|                                     |");
console.log(`|     Tests finished: ${successCount} / ${allCount}           |`);
console.log(`|     ${allCount - successCount} tests Failed!                 |`);
console.log("|                                     |");
console.log("---------------------------------------");
