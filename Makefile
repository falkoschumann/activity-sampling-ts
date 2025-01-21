export NPM_CONFIG_YES=true

all: dist check

clean:
	rm -rf .vite

distclean: clean
	rm -rf node_modules
	rm -rf out

dist: build

start: build
	npm start

check: test
	npx prettier . --check
	npx eslint src test

format:
	npx prettier . --write
	npx eslint --fix src test

doc:
	plantuml doc/*.puml

dev: build
	npx electron-forge start

dev-web: prepare
	npx vite --port 8080

test: build
	npx vitest run

unit-tests: build
	npx vitest run --testPathPattern=".*\/unit\/.*"

integration-tests: build
	npx vitest run --testPathPattern=".*\/integration\/.*"

e2e-tests: build
	npx vitest run --testPathPattern=".*\/e2e\/.*"

coverage: build
	npx vitest --coverage

build: prepare
	npx electron-forge make

prepare: version
	@if [ -n "$(CI)" ] ; then \
		echo "CI detected, run npm ci"; \
		npm ci; \
	else \
		npm install; \
	fi

version:
	@echo "Use Node.js $(shell node --version)"
	@echo "Use NPM $(shell npm --version)"

.PHONY: \
	all clean distclean dist start \
	check format \
	doc \
	dev test unit-tests integration-tests e2e-tests coverage \
	build prepare version
