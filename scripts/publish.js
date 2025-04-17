// This file is our main file for publishing the project. It will run the scripts in the correct order and handle errors.
import { exec } from "child_process";
import chalk from "chalk";
import { restoreFromMain } from "./index.js";

console.log("Running scripts. Time is " + new Date().toLocaleTimeString());

try {
  const restoreFromMainStatus = await restoreFromMain();
} catch (error) {
  console.error(
    `Something went wrong while ${chalk.purple(
      "restoring"
    )} from ${chalk.purple(
      "main"
    )} branch. Time is ${new Date().toLocaleTimeString()} - ${error.message}`
  );
}
