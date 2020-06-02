const router = require( "express" ).Router()
const Reviews = require('../controllers/reviews')

router.use("/", Reviews.getByKeyword);
router.use("/:id", Reviews.getById)

module.exports = router;