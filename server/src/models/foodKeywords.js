var mongoose = require("mongoose");
var Schema = require("mongoose").Schema;

var schema = Schema({

    keyword: { type: String, trim: true },

})

module.exports = mongoose.model('foodKeywords', schema)