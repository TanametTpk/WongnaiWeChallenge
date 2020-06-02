const express = require("express")
const http = require("http")
const middleware = require("./middlewares")
const cors = require("cors")

module.exports = function(){

	var app = express()
	const server = http.createServer(app)

    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
	app.use(cors())
	app.use(middleware.customResponses)

	require( "./mongoose" )(app)
	app.use(require( "../app" ))

	return {
		app:app,
		server:server,
	}
}