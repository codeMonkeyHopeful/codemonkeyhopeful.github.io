// This script is used to run node scripts to clean, compile, and bundle the project.
// It uses the child_process module to execute shell commands.
import { exec } from "child_process";

function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(`Error executing ${command}: ${stderr}`);
      } else {
        console.log(stdout);
        resolve();
      }
    });
  });
}

async function runScripts() {
  try {
    console.log("Running scripts...");

    // TODO: update array with the scripts when done writing them

    const commands = ["clean", "compile", "bundle"];

    for (const command of commands) {
      console.log(`Running ${command} command...`);
      await runCommand(`npm run ${command}`);
      console.log(
        `Completed ${command} command at ${new Date().toLocaleTimeString()}.`
      );
    }
    console.log(
      `All scripts completed successfully at ${new Date().toLocaleTimeString()}.`
    );
  } catch (err) {
    console.error(err);
  }
}

runScripts();
