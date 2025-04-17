import { execSync } from "child_process";
import moment from "moment";
import chalk from "chalk";

const commitWithMessage = async () => {
  // Get the current datetime in a readable format
  const dateTime = moment().format("YYYY-MM-DD HH:mm:ss");

  // Get the username of the person who pushed the code
  const username = execSync("git config user.name", {
    encoding: "utf-8",
  }).trim();

  console.log(
    `
    ${chalk.green("G  I  T  H  U  B")}
    Committing with message: "Production launch: ${dateTime} by user: ${username}"`
  );

  execSync(`git add .`);
  // Commit the changes with the generated message
  execSync(
    `git commit -m "Production launch: ${dateTime} by user: ${username}"`
  );

  console.log(
    `Commit completed
    ${chalk.green("G  I  T  H  U  B")}`
  );
};

commitWithMessage();
// execSync(`git push origin gh-pages`);
