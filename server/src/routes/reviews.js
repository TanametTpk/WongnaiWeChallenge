const router = require( "express" ).Router()
const Reviews = require('../controllers/reviews')

router
    .get("/", Reviews.getByKeyword)

router
    .get("/:id", Reviews.getById)
    .put(Reviews.editReview)

module.exports = router;