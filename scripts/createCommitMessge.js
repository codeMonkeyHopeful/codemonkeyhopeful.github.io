const { execSync } = require("child_process");
const moment = require("moment");

// Get the current datetime in a readable format
const dateTime = moment().format("YYYY-MM-DD HH:mm:ss");

// Get the username of the person who pushed the code
const username = execSync("git config user.name", { encoding: "utf-8" }).trim();

console.log(`Production launch: ${dateTime} by user: ${username}`);
