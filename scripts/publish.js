// This file is our main file for publishing the project. It will run the scripts in the correct order and handle errors.
import { exec } from "child_process";
import { commands } from "./commands.js";
import chalk from "chalk";

const runScripts = async () => {
  console.log(
    chalk.blue("Running scripts. Time is " + new Date().toLocaleTimeString())
  );
  for (const command in commands) {
    console.log(chalk.blue(`Running ${commands[command].name} command.`));
    try {
      await exec(commands[command].command);
      console.log(
        chalk.green(
          `${
            commands[command].description
          } successful. Time is ${new Date().toLocaleTimeString()}`
        )
      );
    } catch (error) {
      console.error(
        chalk.red(
          `Error ${
            commands[command].description
          }. Time is ${new Date().toLocaleTimeString()} - ${error.message}`
        )
      );
    }
  }
};

runScripts()
  .then(() => {
    console.log(chalk.green("All scripts completed successfully."));
  })
  .catch((error) => {
    console.error(chalk.red("Error running scripts: " + error.message));
  });
