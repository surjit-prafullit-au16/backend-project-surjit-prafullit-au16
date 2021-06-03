const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    body : {
        type : String,
        trim : true
    },
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    movie_id: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Movie'
    } 

})

const Comment = new mongoose.model('Comment', commentSchema)
module.exports = Comment