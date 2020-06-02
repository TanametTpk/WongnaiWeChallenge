var mongoose = require("mongoose");
var Schema = require("mongoose").Schema;

var schema = Schema({

    _id: { type: Number },
    review: { type: String },

})

module.exports = mongoose.model('reviews', schema)