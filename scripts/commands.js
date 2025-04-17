export const commands = {
  checkout: {
    name: "Checkout",
    command: "git checkout gh-pages",
    description: "Checking out to gh-pages branch",
  },
  pull: {
    name: "Pull",
    command: "git pull origin gh-pages",
    description: "Pulling from gh-pages branch",
  },
  restore: {
    name: "Restore",
    command:
      "git restore --source=main .gitignore index.html package.json vite.config.ts tsconfig.app.json tsconfig.json tsconfig.node.json scripts/",
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
  push: {
    name: "Push",
    command: "",
    description: "Pushing to gh-pages branch",
  },
};
