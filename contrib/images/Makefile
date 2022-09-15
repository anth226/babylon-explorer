all: explorer nginx-proxy

explorer:
	docker build --tag babylonchain/explorer -f explorer/Dockerfile \
		$(shell git rev-parse --show-toplevel)

nginx-proxy:
	docker build --tag babylonchain/nginx-proxy -f nginx-proxy/Dockerfile \
		$(shell git rev-parse --show-toplevel)

explorer-rmi:
	docker rmi babylonchain/explorer 2>/dev/null; true

nginx-proxy-rmi:
	docker rmi babylonchain/nginx-proxy 2>/dev/null; true

clean: explorer-rmi nginx-proxy-rmi

.PHONY: all explorer explorer-rmi nginx-proxy nginx-proxy-rmi
