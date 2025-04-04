import { execSync } from "child_process";
import moment from "moment";

// Get the current datetime in a readable format
const dateTime = moment().format("YYYY-MM-DD HH:mm:ss");

// Get the username of the person who pushed the code
const username = execSync("git config user.name", { encoding: "utf-8" }).trim();

console.log(
  `Committing with message: "Production launch: ${dateTime} by user: ${username}"`
);

execSync(`git add .`);
// Commit the changes with the generated message
execSync(`git commit -m "Production launch: ${dateTime} by user: ${username}"`);
execSync(`git push origin gh-pages`);
