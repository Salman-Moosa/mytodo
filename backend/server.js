const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for todos
let todos = [
  {
    id: 1,
    text: "Learn Something",
    completed: false,
    createdAt: new Date().toISOString(),
    reminderTime: null,
  },
  {
    id: 2,
    text: "Buy apple",
    completed: false,
    createdAt: new Date().toISOString(),
    reminderTime: null,
  },
];

let nextId = 4;

// GET /todos - Get all todos (sorted by latest first)
app.get("/todos", (req, res) => {
  console.log("GET /todos - Returning", todos.length, "todos");
  // Sort by createdAt descending (latest first)
  const sortedTodos = [...todos].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  res.json(sortedTodos);
});

// POST /todos - Add a new todo
app.post("/todos", (req, res) => {
  const { text, reminderTime } = req.body;

  if (!text || text.trim() === "") {
    return res.status(400).json({ error: "Todo text is required" });
  }

  const newTodo = {
    id: nextId++,
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
    reminderTime: reminderTime || null,
  };

  todos.push(newTodo);
  console.log("POST /todos - Added:", newTodo);
  res.status(201).json(newTodo);
});

// DELETE /todos/:id - Delete a todo
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos.splice(index, 1);
  console.log("DELETE /todos/" + id + " - Deleted");
  res.status(204).send();
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log("Available endpoints:");
  console.log("  GET  /todos  - Get all todos");
  console.log("  POST /todos  - Add a new todo");
  console.log("  DELETE /todos/:id - Delete a todo");
  console.log("  GET  /health - Health check");
});

module.exports = app;
