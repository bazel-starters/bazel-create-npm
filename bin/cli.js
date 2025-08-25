#!/usr/bin/env node
import degit from "degit";

const args = process.argv.slice(2);
const targetDir = args[0] || "my-bazel-project";

// Bazel starter repo
const repo = "bazel-starters/js";

async function main() {
  console.log(`📦 Cloning ${repo} into ${targetDir}...`);
  const emitter = degit(repo, { cache: false, force: true });
  await emitter.clone(targetDir);
  console.log("✅ Done!");
  console.log("");
  console.log("Next steps:");
  console.log(`  cd ${targetDir}`);
  console.log("  bazel build //...");
}

main().catch(err => {
  console.error("❌ Error:", err);
  process.exit(1);
});
