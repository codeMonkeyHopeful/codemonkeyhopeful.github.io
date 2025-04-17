// This file is our main file for publishing the project. It will run the scripts in the correct order and handle errors.
import { exec } from "child_process";
import chalk from "chalk";
import { restoreFromMain } from "./index.js";

console.log("Running scripts. Time is " + new Date().toLocaleTimeString());

try {
  const responses = [];
  const restoreFromMainStatus = await restoreFromMain();

  responses.push(restoreFromMainStatus);
} catch (error) {
  console.error(
    `Something went wrong while ${chalk.purple(
      "restoring"
    )} from ${chalk.purple(
      "main"
    )} branch. Time is ${new Date().toLocaleTimeString()} - ${error.message}`
  );
} finally {
  // We will get passes the breaking error
  console.log(`. Time is ${new Date().toLocaleTimeString()}`);
}
