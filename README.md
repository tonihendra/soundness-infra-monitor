# 🔎 Soundness Infra Monitor  

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)  
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)  
[![Docker](https://img.shields.io/badge/Docker-Compose-blue?logo=docker)](https://www.docker.com/)  
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  

A skeleton repository for **PoC vApp Infrastructure category**.  
This project provides a **backend (Node.js/Express)** and **frontend (React + Vite)** running together with **Docker Compose**.

---
**Description :
A Proof of Concept monitoring tool for Soundness Layer infra, enabling visibility of validator nodes and system health via lightweight dashboard**
## 📂 Project Structure
```

soundness-infra-monitor/
├── .devcontainer/       # VSCode Devcontainer configuration
├── backend/             # Backend service (Node.js + Express)
├── frontend/            # Frontend service (React + Vite)
├── docker-compose.yml   # Container orchestration
├── run.sh               # Helper script to run the project
└── README.md            # Documentation

````

---

## 🚀 Features
- **Backend API** powered by **Express**.
- **Frontend UI** powered by **React + Vite**.
- **Docker Compose** to orchestrate both services.
- **Port auto-forwarding**:
  - `3001` → Backend API (`/status`)
  - `5173` → Frontend UI

---

# Soundness Infra Monitor (PoC)

## 📌 Description
A Proof of Concept monitoring dashboard for **Soundness Layer infrastructure**, providing visibility into node health, system metrics, and infra performance.

This PoC is:
- **Self-contained** → can run locally or in Docker.
- **Reproducible** → simple steps to set up and verify.
- **Extendable** → can be expanded to support more detailed Soundness Layer metrics.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (>= 18.x)
- npm (comes with Node.js)
- (Optional) Docker

### 1. Clone the repository
```bash
git clone https://github.com/tonihendra/soundness-infra-monitor
cd soundness-infra-monitor
2. Install dependencies
```bash
npm install

3. Start development server
```bash
npm run dev


Open your browser at:
👉 http://localhost:3000

🐳 Run with Docker (Optional)

If you prefer Docker, you can run the app in a container:

docker build -t soundness-monitor .
docker run -p 3000:3000 soundness-monitor


Access the dashboard at:
👉 http://localhost:3000

✅ PoC Notes

This PoC demonstrates a lightweight dashboard concept.

Designed to integrate with Soundness Layer validator endpoints for real monitoring.

Simple enough to be reproduced by any developer following these instructions.

---

## 👨‍💻 Author

Made with ❤️ by **Soundness Team**





