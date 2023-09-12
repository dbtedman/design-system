.DEFAULT_GOAL := all

.PHONY: all
all: install

.PHONY: install
install:
	@pnpm install

.PHONY: lint
lint:
	@pnpm recursive --include-workspace-root run lint

.PHONY: format
format:
	@pnpm recursive --include-workspace-root run format

.PHONY: build
build:
	@pnpm recursive --include-workspace-root run build

.PHONY: dev
dev:
	@pnpm recursive --include-workspace-root run dev

.PHONY: start
start:
	@pnpm recursive --include-workspace-root run start

.PHONY: test
test:
	@pnpm recursive --include-workspace-root run test
