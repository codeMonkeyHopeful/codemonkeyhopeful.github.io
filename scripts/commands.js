const trackedPagesBranch = "gh-pages-test";
const branchToMirror = "main";

export const commands = {
  checkout: {
    name: "Checkout",
    command: `git checkout ${trackedPagesBranch}`,
    description: "Checking out to gh-pages branch",
  },
  pull: {
    name: "Pull",
    command: `git pull origin ${trackedPagesBranch}`,
    description: "Pulling from gh-pages branch",
  },
  restore: {
    name: "Restore",
    command: `git restore --source=${branchToMirror} .gitignore index.html package.json vite.config.ts tsconfig.app.json tsconfig.json tsconfig.node.json scripts/`,
    description: "Restoring from main branch",
  },
  install: {
    name: "Install",
    command: "npm install",
    description: "Installing dependencies",
  },
  build: {
    name: "Build",
    command: "npm run build",
    description: "Building the project",
  },
  commit: {
    name: "Commit",
    command: "npm run commit",
    description: "Committing the project",
  },
  // TODO Upate the command to actual push command
  push: {
    name: "Push",
    command: "",
    description: `Pushing to ${trackedPagesBranch} branch`,
  },
};
