import { exec } from "child_process";

export const restoreFromMain = async () => {
  console.log(
    `Restoring from main branch. Time is ${new Date().toLocaleTimeString()}`
  );

  try {
    await exec(
      "git restore  --source=main .gitignore index.html package.json vite.config.ts tsconfig.app.json tsconfig.json tsconfig.node.json scripts/ "
    );

    console.log(
      `Restoring from main successful. Time is ${new Date().toLocaleTimeString()}`
    );
    return {
      status: "success",
      message: "Restoredfrom main branch",
    };
  } catch (error) {
    console.error(
      `Error restoring from main branch. Time is ${new Date().toLocaleTimeString()} - ${
        error.message
      }`
    );
    return {
      status: "error",
      message: error.message,
    };
  }
};
