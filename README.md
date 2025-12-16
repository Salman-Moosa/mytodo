# 📝 Simple Todo App

A simple Todo application to learn **Docker Compose** and **GitHub Actions** with separate backend and frontend services.

## 🏗️ Project Structure

```
TODO/
├── backend/
│   ├── Dockerfile          # Backend Docker image
│   ├── package.json        # Node.js dependencies
│   ├── server.js           # Express API server
│   └── test.js             # Backend tests
├── frontend/
│   ├── Dockerfile          # Frontend Docker image
│   ├── index.html          # Todo app UI
│   ├── nginx.conf          # Nginx configuration
│   ├── package.json        # Frontend dependencies
│   └── test.js             # Frontend tests
├── .github/
│   └── workflows/
│       └── docker-build.yml  # GitHub Actions workflow
├── docker-compose.yml      # Docker Compose configuration
└── README.md               # This file
```

## 🚀 Quick Start

### Option 1: Run with Docker Compose (Recommended)

```bash
# Start all services
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

Then open http://localhost:3000 in your browser.

### Option 2: Run Locally (Without Docker)

**Backend:**

```bash
cd backend
npm install
npm start
```

Backend runs on http://localhost:5000

**Frontend:**

```bash
cd frontend
npm install
npm start
```

Frontend runs on http://localhost:3000

## 📡 API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/todos`     | Get all todos     |
| POST   | `/todos`     | Create a new todo |
| DELETE | `/todos/:id` | Delete a todo     |
| GET    | `/health`    | Health check      |

### Example API Usage

```bash
# Get all todos
curl http://localhost:5000/todos

# Add a new todo
curl -X POST http://localhost:5000/todos \
  -H "Content-Type: application/json" \
  -d '{"text": "Learn Docker"}'

# Delete a todo
curl -X DELETE http://localhost:5000/todos/1
```

## 🐳 Docker Details

### Build Images Individually

```bash
# Build backend
docker build -t todo-backend ./backend

# Build frontend
docker build -t todo-frontend ./frontend
```

### Run Containers Individually

```bash
# Create network
docker network create todo-network

# Run backend
docker run -d --name todo-backend --network todo-network -p 5000:5000 todo-backend

# Run frontend
docker run -d --name todo-frontend --network todo-network -p 3000:3000 todo-frontend
```

### Useful Docker Commands

```bash
# View running containers
docker-compose ps

# View logs
docker-compose logs -f

# Stop all containers
docker-compose down

# Rebuild and restart
docker-compose up --build --force-recreate
```

## 🔄 GitHub Actions

The workflow (`.github/workflows/docker-build.yml`) runs on every push to `main` and:

1. ✅ Builds the Backend Docker image
2. ✅ Builds the Frontend Docker image
3. ✅ Starts containers with Docker Compose
4. ✅ Tests Backend health endpoint
5. ✅ Tests Backend API (GET and POST)
6. ✅ Tests Frontend accessibility
7. ✅ Cleans up containers

### To Enable GitHub Actions

1. Push this repository to GitHub
2. Go to your repository → Actions tab
3. The workflow will run automatically on push to `main`

## 🧪 Running Tests

```bash
# Test backend (requires backend to be running)
cd backend
npm test

# Test frontend
cd frontend
npm test
```

## 📚 What You'll Learn

- **Docker**: Containerizing Node.js and static file applications
- **Dockerfile**: Writing multi-stage builds and health checks
- **Docker Compose**: Orchestrating multiple services
- **Networking**: Container-to-container communication
- **GitHub Actions**: CI/CD pipeline for Docker builds
- **API Development**: Simple REST API with Express

## 🛠️ Technologies Used

- **Backend**: Node.js, Express, CORS
- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Server**: Nginx (for frontend in Docker)
- **Containerization**: Docker, Docker Compose
- **CI/CD**: GitHub Actions

## 📝 License

MIT - Feel free to use this for learning!
