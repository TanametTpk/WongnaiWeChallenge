const Models = require('../models')
const Reviews = Models.reviews

module.exports = {

    getById: async (req, res) => {

        let id = req.params.id
        let review = await Reviews.findById({_id: id})

        res.success(review)

    },

    getByKeyword: async (req, res) => {
        res.success([])
    },

}