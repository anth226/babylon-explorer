# Project Setup

## Babylon node setup
1. In your local node's ```babylon/config/config.toml``` file, under the "RPC Server Configuration Options" section, set ```cors_allowed_origins = ["*"]```
2. In the same file under the "Instrumentation Configuration Options" seciton, set ```prometheus = true``` and ```max_open_connections = 0```
3. In the ```babylon/config/app.toml``` file, under the ```API Configuration``` section, set ```enabled-unsafe-cors = true```

## Web project setup
### nginx setup

We need nginx in our project set up in order to address CORS policy issues of the prometheus metrics server. Since we do not have the access to the prometheus server code, and the configuration file does not contain a prometheus node CORS policy setter, we have to work around this issue with a reverse proxy such as nginx.

1. Download nginx with brew or other methods of your choice
```
brew install nginx
``` 
2. Start the nginx server with the custom config file by running the following. Note that the full path has to be used.

```
nginx -c {vue_project_full_path}/config/nginx.conf
```

### Vue app setup

```
npm install
```

Compiles and reloads the app on save for development

```
npm run dev
```

or Compiles and minifies for production

```
npm run build
```

 After the setup is completed, you'll be able to view the frontend in your browser at ```localhost:26661```