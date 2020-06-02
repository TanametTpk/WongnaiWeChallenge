const fs = require('fs')
const csv = require('neat-csv')
const models = require('./mongoose')()

const reviews = fs.readFileSync('./datasets/test_file.csv', 'utf8')
const food_dict = fs.readFileSync('./datasets/food_dictionary.txt', 'utf8')

const addReviews = async (reviews) => {
    const results = await csv(reviews, { separator: ";" })
    let Review = models.reviews
    
    await Promise.all(results.map(async(review) => {

        let doc = new Review({ _id: parseInt(review.reviewID), review: review.review })
        return doc.save()

    }))

    console.log("add review completed")

}

const addFoodDict = async (dict) => {

    let FoodKeyword = models.foodKeywords

    await Promise.all(dict.split("\n").map((keyword) => {

        let doc = new FoodKeyword({ keyword })
        return doc.save()

    }))

    console.log("add food keyword completed")

}

addReviews(reviews)
addFoodDict(food_dict)