const Models = require('../models')
const Reviews = Models.reviews
const FoodKeyword = Models.foodKeywords

module.exports = {

    getById: async (req, res) => {

        let id = req.params.id
        let review = await Reviews.findById({_id: id})

        res.success(review)

    },

    getByKeyword: async (req, res) => {

        if (!req.query.query) {
            return res.preconditionFailed({ error: "Not Found Query" })
        }

        let keywordDoc = await FoodKeyword.findOne({keyword: req.query.query})

        if (keywordDoc){

            let reviews = await Reviews.find({ review: new RegExp(keywordDoc.keyword) }).limit(5)
            return res.success(reviews)

        }

        res.success([])

    },

    editReview: async (req, res) => {

        let id = req.params.id

        if ( (!req.body.review) && `${req.body.review}`.trim().length < 1 ) 
            return res.preconditionFailed({ error: "Not Found Review in Request Body" })

        let reviewDoc = await Reviews.findById({_id: id})
        reviewDoc.review = `${req.body.review}`

        res.success(review)

    }

}