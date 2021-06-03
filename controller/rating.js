const Movie = require('../model/MovieSchema')   

const ratingHandler = async (req,res)=>{
    await Movie.findOne({name: req.body.movie_name},{_id:0,__v:0},(err,movie)=>{
        if(movie == null){
            return res.send("Movie not found!")
        }
        const new_rating = (((movie.rating * movie.numVotes) + req.body.rating)/(movie.numVotes+1)).toFixed(1)
        const new_numVotes = movie.numVotes+1
        Movie.findOneAndUpdate({'name':movie.name},{$set:{'rating':new_rating, 'numVotes':new_numVotes}},function(err,result){
            if(err){
                throw err
            }
        })
        Movie.findOne({name: req.body.movie_name},{__v:0,comments:0},(err,movieUpdated)=>{
            if(err){
                throw err
            }
            else{
                res.json({
                    "message": "Rating successfully updated",
                    movieUpdated
                })
            }
        })
        }
    )
}
module.exports = ratingHandler