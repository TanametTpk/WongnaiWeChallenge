const env = require("./configs/env")
const express = require('./config/express')
const items = express()
const server = items.server

server.listen(env.network.PORT , function() {
    console.log(`server run at http://localhost:${env.network.PORT}`);
})