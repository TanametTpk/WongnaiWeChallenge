const router = require( "express" ).Router()
const reviews = require('./reviews')

router.use("/reviews", reviews);

module.exports = router;