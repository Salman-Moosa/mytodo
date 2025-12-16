// Simple test to check if the server starts and responds correctly
const http = require("http");

const API_URL = process.env.API_URL || "http://localhost:5000";

function makeRequest(path, method = "GET", body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, API_URL);
    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname,
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        resolve({
          status: res.statusCode,
          data: data ? JSON.parse(data) : null,
        });
      });
    });

    req.on("error", reject);

    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

async function runTests() {
  console.log("🧪 Running backend tests...\n");
  let passed = 0;
  let failed = 0;

  try {
    // Test 1: Health check
    console.log("Test 1: Health check endpoint");
    const health = await makeRequest("/health");
    if (health.status === 200 && health.data.status === "ok") {
      console.log("  ✅ PASSED\n");
      passed++;
    } else {
      console.log("  ❌ FAILED\n");
      failed++;
    }

    // Test 2: GET /todos
    console.log("Test 2: GET /todos returns array");
    const getTodos = await makeRequest("/todos");
    if (getTodos.status === 200 && Array.isArray(getTodos.data)) {
      console.log("  ✅ PASSED\n");
      passed++;
    } else {
      console.log("  ❌ FAILED\n");
      failed++;
    }

    // Test 3: POST /todos
    console.log("Test 3: POST /todos creates new todo");
    const postTodo = await makeRequest("/todos", "POST", { text: "Test todo" });
    if (postTodo.status === 201 && postTodo.data.text === "Test todo") {
      console.log("  ✅ PASSED\n");
      passed++;
    } else {
      console.log("  ❌ FAILED\n");
      failed++;
    }

    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(`Results: ${passed} passed, ${failed} failed`);

    process.exit(failed > 0 ? 1 : 0);
  } catch (error) {
    console.error("❌ Test error:", error.message);
    console.log("\nMake sure the server is running!");
    process.exit(1);
  }
}

runTests();
