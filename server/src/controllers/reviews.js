
module.exports = (Models) => {

    const Reviews = Models.reviews
    const FoodKeyword = Models.foodKeywords

    return {

        getById: async (req, res) => {
    
            let id = req.params.id

            // if not a number
            if (isNaN(id)) return res.success(null)

            let review = await Reviews.findById(id)
    
            res.success(review)
    
        },
    
        getByKeyword: async (req, res) => {
    
            if (!req.query.query) {
                return res.preconditionFailed({ error: "Not Found Query" })
            }
    
            let keywordDoc = await FoodKeyword.findOne({keyword: req.query.query})
    
            if (keywordDoc){
    
                let reviews = await Reviews.find({ review: new RegExp(keywordDoc.keyword) }).limit(5)
                reviews = reviews.map((rev) => {
                    rev.review = rev.review.replace(new RegExp(keywordDoc.keyword, 'g'), `<keyword>${keywordDoc.keyword}</keyword>`)
                    return rev
                })

                return res.success(reviews)
    
            }
    
            res.success([])
    
        },
    
        editReview: async (req, res) => {
    
            let id = req.params.id
    
            if ( (!req.body.review) || `${req.body.review}`.trim().length < 1 ) 
                return res.preconditionFailed({ error: "Not Found Review in Request Body" })
    
            let reviewDoc = await Reviews.findById(id)

            if (!reviewDoc)
                return res.preconditionFailed({ error: "Not Found Review" })

            reviewDoc.review = `${req.body.review}`
            await reviewDoc.save()
    
            res.success(reviewDoc)
    
        }
    
    }

}