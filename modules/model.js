const mongoose = require("mongoose")

var schema =  new mongoose.Schema({

    Date:{
        type:Number
    },

    title:{
        type:String
    },
    text:{
        type:String
    },


})

const blogData = mongoose.model('blogData',schema)
module.exports = blogData 