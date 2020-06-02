
module.exports = (Models) => {

    const router = require( "express" ).Router()
    const Reviews = require('../controllers/reviews')(Models)

    router.get("/", Reviews.getByKeyword)

    router.get("/:id", Reviews.getById)
    router.put("/:id", Reviews.editReview)

    return router

}