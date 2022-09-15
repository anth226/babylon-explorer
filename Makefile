localnet-build-explorer:
	$(MAKE) -C contrib/images explorer

localnet-build-nginx-proxy:
	$(MAKE) -C contrib/images nginx-proxy

localnet-start: localnet-stop localnet-build-explorer localnet-build-nginx-proxy
	docker-compose up -d

localnet-stop:
	docker-compose down
