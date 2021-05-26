const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    body : {
        type : String,
        trim : true
    },
    user_id : {
        type : Schema.Types.ObjectId,
        ref : 'users'
    },
    movie_id: {
        type : Schema.Types.ObjectId,
        ref : 'movie'
    } 

})

const Comment = new mongoose.model('Comment', commentSchema)
module.exports = Comment