// Simple test to check if the frontend files exist and are valid
const fs = require("fs");
const path = require("path");

console.log("🧪 Running frontend tests...\n");

let passed = 0;
let failed = 0;

// Test 1: Check if index.html exists
console.log("Test 1: index.html exists");
const indexPath = path.join(__dirname, "index.html");
if (fs.existsSync(indexPath)) {
  console.log("  ✅ PASSED\n");
  passed++;
} else {
  console.log("  ❌ FAILED\n");
  failed++;
}

// Test 2: Check if index.html contains required elements
console.log("Test 2: index.html contains required elements");
const htmlContent = fs.readFileSync(indexPath, "utf8");
const hasForm = htmlContent.includes("todoInput");
const hasTodoList = htmlContent.includes("todoList");
const hasScript = htmlContent.includes("<script>");

if (hasForm && hasTodoList && hasScript) {
  console.log("  ✅ PASSED\n");
  passed++;
} else {
  console.log("  ❌ FAILED\n");
  failed++;
}

// Test 3: Check if API_URL is configurable
console.log("Test 3: API_URL is configurable");
if (htmlContent.includes("API_URL")) {
  console.log("  ✅ PASSED\n");
  passed++;
} else {
  console.log("  ❌ FAILED\n");
  failed++;
}

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`Results: ${passed} passed, ${failed} failed`);

process.exit(failed > 0 ? 1 : 0);
