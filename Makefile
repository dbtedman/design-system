.DEFAULT_GOAL := all

.PHONY: all
all: install lint

.PHONY: pre_commit
pre_commit: lint

.PHONY: install
install:
	@pnpm install

.PHONY: lint
lint:
	@pnpm run lint

.PHONY: format
format:
	@pnpm run format

.PHONY: dev
dev:
	@pnpm recursive run dev

.PHONY: upgrade
upgrade:
	@pnpm dlx npm-check-updates -u && pnpm upgrade
