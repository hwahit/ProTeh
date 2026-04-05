# CLAUDE.md - ProTech

> **Version 1.0** — Project guidelines

---

## Project Context

Company website for TechPro Solutions SAS — Paris, France.
IT services catalog and client portal.

- **Backend**: Python Flask API (`backend/`)
- **Frontend**: Next.js + Tailwind CSS (`frontend/`)
- **Database**: MySQL 8.0
- **Infra**: Docker / Docker Compose

---

## Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS |
| Backend | Flask 3, SQLAlchemy, Flask-Migrate, Flask-JWT |
| Database | MySQL 8.0 |
| Infra | Docker Compose, Nginx |

---

## Project Structure

```
ProTech/
├── backend/
│   ├── app/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── config.py
│   │   └── __init__.py
│   ├── Dockerfile
│   ├── requirements.txt
│   └── run.py
├── frontend/
│   ├── src/app/
│   ├── Dockerfile
│   └── package.json
├── infra/nginx/
├── data/
├── docker-compose.yml
├── Makefile
└── .env.example
```

---

## Critical Rules

### Safe-Delete

**NEVER** direct `rm`. ALWAYS:
```bash
TRASH="/tmp/trash/$(date +%Y%m%d-%H%M%S)"
mkdir -p "$TRASH"
mv /path/to/delete "$TRASH/"
```

### Git Workflow

- Branch format: `{username}/issue{id}-description`
- No AI signatures in commits

---

## Quick Start

```bash
cp .env.example .env
make build
make up
```

API health: http://localhost/api/health
Frontend: http://localhost
