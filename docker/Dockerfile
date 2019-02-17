FROM node:8

WORKDIR /usr/src/app

RUN npm install -g serve

COPY build ./build

EXPOSE 5000

CMD [ "serve", "build" ]
