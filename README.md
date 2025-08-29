# Soundness Infra Monitor

Repo skeleton for PoC vApp category Infrastructure.
soundness-infra-monitor/
 ├─ .devcontainer/
 ├─ backend/
 ├─ frontend/
 ├─ docker-compose.yml
 ├─ run.sh
 └─ README.md
Run
./run.sh
- Build backend (Node.js/Express)
- Build frontend (React + Vite)
= run via docker-compose

auto-forward port:
- 3001 → Backend API (/status)
- 5173 → Frontend UI


