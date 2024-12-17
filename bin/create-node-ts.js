#!/usr/bin/env node

const { execSync } = require("child_process");

const projectName = process.argv[2] || "my-ts-server";
const repoUrl = "https://github.com/devWithKD/create-node-ts-template.git";

try {
  console.log(`🚀 Creating project: ${projectName}`);
  execSync(`npx degit ${repoUrl} ${projectName}`, { stdio: "inherit" });
  console.log(`📦 Installing dependencies...`);
  execSync(`cd ${projectName} && npm install`, { stdio: "inherit" });
  console.log(`✅ Project created successfully!`);
  console.log(`👉 Next steps:`);
  console.log(`   cd ${projectName}`);
  console.log(`   npm run dev`);
} catch (error) {
  console.error("❌ Error creating project:", error);
}
