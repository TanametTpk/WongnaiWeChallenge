const express = require("express")
const http = require("http")
const middleware = require("./middlewares")
const cors = require("cors")

module.exports = function(Models){

	var app = express()
	const server = http.createServer(app)

    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
	app.use(cors())
	app.use(middleware.customResponses)

	app.use(require( "../routes" )(Models))

	return {
		app:app,
		server:server,
	}
}