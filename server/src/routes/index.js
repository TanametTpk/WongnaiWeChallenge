
module.exports = (Models) => {

    const router = require( "express" ).Router()
    const reviews = require('./reviews')(Models)

    router.use("/reviews", reviews);

    return router

}