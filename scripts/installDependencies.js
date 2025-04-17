import { exec } from "child_process";

export const installDependencies = async () => {
  console.log(`Installing libs. Time is ${new Date().toLocaleTimeString()}`);

  try {
    await exec("npm  install");

    console.log(
      `Install successful. Time is ${new Date().toLocaleTimeString()}`
    );
    return {
      status: "success",
      step: "installDependencies",
      message: "Install successful",
    };
  } catch (error) {
    console.error(
      `Error installing libs. Time is ${new Date().toLocaleTimeString()} - ${
        error.message
      }`
    );
    return {
      status: "error",
      step: "installDependencies",
      message: error.message,
    };
  }
};
