FROM node:8-alpine

COPY ./package.json /app/
WORKDIR /app/

RUN npm i --production

COPY . /app/
CMD ["node" , "./src/server.js"]

EXPOSE 8080