// This file is our main file for publishing the project. It will run the scripts in the correct order and handle errors.
import { execSync } from "child_process";
import { commands } from "./commands.js";

const currentBranch = await execSync("git branch --show-current")
  .toString()
  .trim();

const runScripts = async () => {
  console.log("Running scripts. Time is " + new Date().toLocaleTimeString());
  for (const command in commands) {
    console.log(`Running ${commands[command].name} command.`);
    try {
      await execSync(commands[command].command);
      console.log(
        `${
          commands[command].description
        } successful. Time is ${new Date().toLocaleTimeString()}`
      );
    } catch (error) {
      console.error(
        `Error ${
          commands[command].description
        }. Time is ${new Date().toLocaleTimeString()} - ${error.message}`
      );

      //IMPORTANT: We need to break the loop if any command fails.
      throw new Error(
        `Error running ${commands[command].name} command: ${error.message}`
      );
    }
  }
};

runScripts()
  .then(() => {
    console.log("All scripts completed successfully.");
  })
  .catch((error) => {
    console.error("Error running scripts: " + error.message);
  })
  .finally(() => {
    execSync(`git checkout ${currentBranch}`);
    console.log(
      `Checked out to ${currentBranch} branch. Time is ${new Date().toLocaleTimeString()}`
    );
  });
