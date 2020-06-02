FROM node:8-alpine

COPY ./package.json /app/
WORKDIR /app/

RUN npm i --production

COPY . /app/
CMD ["node" , "./main.js"]

EXPOSE 9090