const fakeReview = require('../data/fake_reviews')
const fakeFoodDict = require('../data/fake_food_dictionary')

module.exports = {
    reviews: {

        findById: async (id) => {

            return fakeReview.find(rev => rev._id == id)

        },

        find: async (payload) => {

            let { review } = payload

            return fakeReview.filter(rev => rev.review.match(review))

        }

    },

    foodKeywords: {

        findOne: async (payload) => {

            let { keyword } = payload
            return fakeFoodDict.find(food => food.keyword === keyword)

        },

    },
}