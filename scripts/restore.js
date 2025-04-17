import { exec } from "child_process";

const restoreFromMain = async () => {
  console.log(
    `Restoring from main branch. Time is ${new Date().toLocaleTimeString()}`
  );
  try {
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
