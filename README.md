<div align="center">

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║    ████████╗██╗  ██╗███████╗    ██████╗  █████╗ ██╗██╗  ██╗   ██╗║
║    ╚══██╔══╝██║  ██║██╔════╝    ██╔══██╗██╔══██╗██║██║  ╚██╗ ██╔╝║
║       ██║   ███████║█████╗      ██║  ██║███████║██║██║   ╚████╔╝ ║
║       ██║   ██╔══██║██╔══╝      ██║  ██║██╔══██║██║██║    ╚██╔╝  ║
║       ██║   ██║  ██║███████╗    ██████╔╝██║  ██║██║███████╗██║   ║
║       ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚═╝   ║
║                                                                  ║
║                         ████████╗ ██████╗ ██████╗  ██████╗       ║
║                         ╚══██╔══╝██╔═══██╗██╔══██╗██╔═══██╗      ║
║                            ██║   ██║   ██║██║  ██║██║   ██║      ║
║                            ██║   ██║   ██║██║  ██║██║   ██║      ║
║                            ██║   ╚██████╔╝██████╔╝╚██████╔╝      ║
║                            ╚═╝    ╚═════╝ ╚═════╝  ╚═════╝       ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### _A Vintage Editorial-Inspired Task Management Experience_

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)

</div>

---

## ◈ About

**The Daily Todo** is a beautifully crafted task management application inspired by vintage newspaper aesthetics. Built as a learning project for **Docker Compose** and **GitHub Actions**, it features a sophisticated editorial design with elegant typography, smooth animations, and a light/dark theme toggle.

> _"Your tasks, delivered fresh daily — with the elegance of yesterday's print."_

---

## ◈ Features

| Feature                  | Description                                                        |
| :----------------------- | :----------------------------------------------------------------- |
| 📰 **Editorial Design**  | Newspaper-inspired UI with Playfair Display & JetBrains Mono fonts |
| 🌓 **Theme Toggle**      | Seamless light/dark mode switching                                 |
| ⏰ **Reminder System**   | Set time-based reminders for your todos                            |
| ✨ **Smooth Animations** | Delightful micro-interactions and transitions                      |
| 🐳 **Containerized**     | Full Docker & Docker Compose support                               |
| 🔄 **CI/CD Ready**       | GitHub Actions workflow included                                   |

---

## ◈ Quick Start

### Using Docker Compose _(Recommended)_

```bash
# Clone and navigate to project
git clone https://github.com/Salman-Moosa/mytodo.git
cd mytodo

# Launch all services
docker-compose up --build
```

> 🌐 Open **http://localhost:3000** in your browser

### Running Locally

<details>
<summary><b>Backend</b> — Express.js API Server</summary>

```bash
cd backend
npm install
npm start
```

API available at `http://localhost:5000`

</details>

<details>
<summary><b>Frontend</b> — Vanilla JS + Nginx</summary>

```bash
cd frontend
npm install
npm start
```

UI available at `http://localhost:3000`

</details>

---

## ◈ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         THE DAILY TODO                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────┐         ┌─────────────┐         ┌──────────┐  │
│   │             │   API   │             │  Serve  │          │  │
│   │   BROWSER   │ ◄─────► │   BACKEND   │ ◄─────► │  NGINX   │  │
│   │             │  :5000  │  (Express)  │  :3000  │          │  │
│   └─────────────┘         └─────────────┘         └──────────┘  │
│                                  │                      │       │
│                                  │                      │       │
│                           ┌──────▼──────────────────────▼──┐    │
│                           │        DOCKER NETWORK          │    │
│                           │         (todo-network)         │    │
│                           └────────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## ◈ API Reference

|  Method  | Endpoint     | Description                           |
| :------: | :----------- | :------------------------------------ |
|  `GET`   | `/todos`     | Retrieve all todos (sorted by latest) |
|  `POST`  | `/todos`     | Create a new todo                     |
| `PATCH`  | `/todos/:id` | Toggle completion status              |
| `DELETE` | `/todos/:id` | Delete a todo                         |
|  `GET`   | `/health`    | Health check endpoint                 |

### Example Requests

```bash
# Fetch all todos
curl http://localhost:5000/todos

# Create a new todo
curl -X POST http://localhost:5000/todos \
  -H "Content-Type: application/json" \
  -d '{"text": "Read the morning paper", "reminderTime": "09:00"}'

# Mark as complete
curl -X PATCH http://localhost:5000/todos/1

# Delete a todo
curl -X DELETE http://localhost:5000/todos/1
```

---

## ◈ Project Structure

```
mytodo/
├── backend/
│   ├── Dockerfile          # Node.js container config
│   ├── package.json        # Dependencies & scripts
│   ├── server.js           # Express API server
│   └── test.js             # API tests
│
├── frontend/
│   ├── Dockerfile          # Nginx container config
│   ├── index.html          # Editorial-styled Todo UI
│   ├── nginx.conf          # Reverse proxy config
│   ├── package.json        # Frontend dependencies
│   └── test.js             # UI tests
│
├── .github/
│   └── workflows/
│       └── docker-build.yml  # CI/CD pipeline
│
├── docker-compose.yml      # Multi-container orchestration
└── README.md               # You are here
```

---

## ◈ Docker Commands

| Command                                      | Action                       |
| :------------------------------------------- | :--------------------------- |
| `docker-compose up --build`                  | Build and start all services |
| `docker-compose up -d`                       | Start in detached mode       |
| `docker-compose logs -f`                     | Stream container logs        |
| `docker-compose ps`                          | List running containers      |
| `docker-compose down`                        | Stop and remove containers   |
| `docker-compose up --build --force-recreate` | Full rebuild                 |

### Building Images Individually

```bash
# Backend
docker build -t todo-backend ./backend

# Frontend
docker build -t todo-frontend ./frontend
```

---

## ◈ CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/docker-build.yml`) executes on every push to `main`:

```
┌──────────────────────────────────────────────────────────────┐
│                      CI/CD PIPELINE                          │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   [1] Build Backend Image                                    │
│         │                                                    │
│         ▼                                                    │
│   [2] Build Frontend Image                                   │
│         │                                                    │
│         ▼                                                    │
│   [3] Start Docker Compose                                   │
│         │                                                    │
│         ├────► [4] Test Backend Health                       │
│         │                                                    │
│         ├────► [5] Test API Endpoints                        │
│         │                                                    │
│         ├────► [6] Test Frontend Access                      │
│         │                                                    │
│         ▼                                                    │
│   [7] Cleanup Containers                                     │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## ◈ Running Tests

```bash
# Backend tests (requires running server)
cd backend && npm test

# Frontend tests
cd frontend && npm test
```

---

## ◈ Tech Stack

<div align="center">

|     Layer      | Technology                        |
| :------------: | :-------------------------------- |
|  **Frontend**  | HTML5 • CSS3 • Vanilla JavaScript |
|  **Backend**   | Node.js • Express.js • CORS       |
|   **Fonts**    | Playfair Display • JetBrains Mono |
|   **Server**   | Nginx (containerized)             |
| **Containers** | Docker • Docker Compose           |
|   **CI/CD**    | GitHub Actions                    |

</div>

---

<div align="center">

```
═══════════════════════════════════════════════════════════════
                    Crafted with ♥ for learning
═══════════════════════════════════════════════════════════════
```

**[⬆ Back to Top](#-about)**

</div>
