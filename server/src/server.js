const env = require("./configs/env")
const express = require('./configs/express')
let Models = require( "./configs/mongoose" )()
const items = express(Models)
const server = items.server

server.listen(env.network.PORT , function() {
    console.log(`server run at http://localhost:${env.network.PORT}`);
})