.PHONY: up down build restart logs shell-backend shell-frontend migrate

up:
	docker compose up -d

down:
	docker compose down

build:
	docker compose build

restart:
	docker compose restart

logs:
	docker compose logs -f

shell-backend:
	docker compose exec backend bash

shell-frontend:
	docker compose exec frontend sh

migrate:
	docker compose exec backend flask db upgrade

install-frontend:
	docker compose exec frontend npm install

lint-backend:
	docker compose exec backend flake8 app/

lint-frontend:
	docker compose exec frontend npm run lint
