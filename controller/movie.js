const db = require('../config/db')
const User = require('../model/UserSchema')
const Movie = require('../model/MovieSchema')   

const movieHandler = async (req,res)=>{

    Movie.findOne({name: req.body.movie_name},{_id:0,numVotes:0,__v:0},(err,movie)=>{
    if(err){
        res.status(400).send("Movie not found!")
    }
    else{
        Movie.find({"genre":movie.genre,"name":{$ne:movie.name}},{_id:0,numVotes:0,__v:0}).sort({"rating":-1}).exec(function(err,model){
            res.json({"your movie":movie,
                        "Movie Recomendation":model    
                    })
        })
    }                        
})
}

module.exports = movieHandler