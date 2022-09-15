This repository contains the front-end for the Babylon explorer.

## Setup

### Babylon setup

Create a Babylon set of files for a single node (or more) and start the Babylon service:
```bash
babylond testnet \
    --v                     1 \
    --output-dir            ./.testnet \
    --starting-ip-address   192.168.10.2 \
    --keyring-backend       test \
    --chain-id              chain-test
```

### Explorer Setup

Install the dependencies
```bash
npm install
```

## Running the explorer

### Running Babylon
Using the above configuration, start an instance of Babylon for a single node.
```bash
babylond start --home ./.testnet/node0/babylond
```

### Running the explorer locally

We need nginx in our project set up in order to address CORS policy
issues of the prometheus metrics server.
Since we do not have the access to the prometheus server code,
and the configuration file does not contain a prometheus node CORS
policy setter, we have to work around this issue with a reverse proxy
such as nginx. We do that as follows:

1. Download nginx with brew or other methods of your choice
```bash
brew install nginx
``` 
2. Modify the config file under `config/nginx.conf`. More specifically, add the
   port in which the Vue service is running. In the case of Docker, add the
   port which will be mapped from port `8080` inside the container. In the case
   of a local development environment add the port `5173` or whichever port you
   use with `npm run dev`.
3. Start the nginx server with the custom config file:
```bash
nginx -c {vue_project_full_path}/config/nginx.conf
```

To run the node for development purposes
```bash
npm run dev
```

After the setup is completed, you'll be able to view the frontend
in your browser at `localhost:5173`

#### Running using Docker

Using docker-compose:
```
make localnet-start
```

The explorer should be accessible at port `26661` on the host machine.
