const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    year:{
        type: Number,
        required:true
    },
    genre:{
        type: String,
        required:true
    },
    numVotes:{
        type: Number,
        default: 100
    },
    comments : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'comment'
    }]
})

const Movie = new mongoose.model('Movie', movieSchema)
module.exports = Movie