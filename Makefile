PROJECT_NAME=tic-tac-vue
PROCCESS_NAME=$(PROJECT_NAME)_ps

build:
	docker build -t $(PROJECT_NAME) . --no-cache
shell:
	docker run --rm -it -v $(shell pwd):/app -p 3000:3000 --entrypoint=ash --name $(PROCCESS_NAME) $(PROJECT_NAME)
run:
	docker run --rm -it -v $(shell pwd):/app -p 3000:3000 --entrypoint=npm --name $(PROCCESS_NAME) $(PROJECT_NAME) run dev
exec:
	docker exec -it $(PROCCESS_NAME) ash
