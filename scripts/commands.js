import { build } from "vite";

export const commands = {
  restore: {
    name: "Restore",
    command:
      "git restore  --source=main .gitignore index.html package.json vite.config.ts tsconfig.app.json tsconfig.json tsconfig.node.json scripts/",
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
};
