FROM node as builder

RUN npm install npm@latest -g
RUN npm install -g http-server

WORKDIR /app
COPY package*.json /app
COPY . /app

RUN npm install
RUN npm run build

EXPOSE 8080
CMD ["http-server", "dist"]
