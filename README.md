# 🔎 Soundness Infra Monitor

A skeleton repository for **PoC vApp Infrastructure category**.  
This project provides a **backend (Node.js/Express)** and **frontend (React + Vite)** running together with **Docker Compose**.

---

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

## ⚡ Getting Started

### 1. Run with Docker Compose
Make sure you have **Docker** & **Docker Compose** installed.

```bash
docker-compose up --build
````

Then open in browser:

* Backend → [http://localhost:3001/status](http://localhost:3001/status)
* Frontend → [http://localhost:5173](http://localhost:5173)

---

### 2. Run with Script

Alternatively, use the included shell script:

```bash
chmod +x run.sh
./run.sh
```

---

## 🛠 Development

* **Backend** → [`backend/`](./backend)
  Tech stack: Node.js + Express
* **Frontend** → [`frontend/`](./frontend)
  Tech stack: React + Vite

---

## 📌 Notes

* This project is still a **skeleton/PoC**.
* Feel free to extend it (e.g., infrastructure monitoring, database integration, metrics, etc.).

---

## 👨‍💻 Author

Made with ❤️ by **Soundness Team**

```

---

Mau saya tambahkan juga **badge keren** (Node.js, React, Docker, License) biar README kamu terlihat seperti proyek open-source profesional di GitHub? 🚀
```
