const fakeReview = require('../data/fake_reviews')
const fakeFoodDict = require('../data/fake_food_dictionary')

module.exports = {
    reviews: {

        findById: async (id) => {

            let reviews = fakeReview.find(rev => rev._id == id)
            if (!reviews) return null
            let object = { ...reviews }
            object["save"] = async() => reviews
            return object

        },

        find: (payload) => {

            let { review } = payload

            let res = {
                reviews: fakeReview.filter(rev => rev.review.match(review)),
                limit: (number) => {
                    return res.reviews.filter((rev,index) => index < number)
                }
            }

            return res

            // return fakeReview.filter(rev => rev.review.match(review))

        }

    },

    foodKeywords: {

        findOne: async (payload) => {

            let { keyword } = payload
            return fakeFoodDict.find(food => food.keyword === keyword)

        },

    },
}