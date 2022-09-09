FROM node:lts-alpine

RUN npm install -g http-server

RUN apk add nginx

WORKDIR /app
COPY package*.json /app
RUN npm install

COPY . /app

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]
