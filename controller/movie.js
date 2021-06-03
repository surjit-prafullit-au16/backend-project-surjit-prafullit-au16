const Movie = require('../model/MovieSchema')   

const movieHandler = async (req,res)=>{
    Movie.findOne({name: req.body.movie_name},{_id:0,numVotes:0,__v:0}).populate({
        path:'comments',
        populate:{
            path:'user_id'
        }
    })
    .exec(function(err,movie){
        if(err){
            console.log(err)
            res.status(400).send("Movie not found!")
        }
        
        else{
            const allComment = []
            for(i=0; i< movie.comments.length; i++){
                allComment.push({[movie.comments[i].user_id.name]:movie.comments[i].body})  
            }    
            Movie.find({"genre":movie.genre,"name":{$ne:movie.name}},{_id:0,numVotes:0,__v:0,comments:0}).sort({"rating":-1}).exec(function(err,model){
                res.json({"Movie":movie.name,
                          "Rating":movie.rating,
                          "Year": movie.year,
                          "Genre":movie.genre,
                          "Comments":allComment,
                          "Movie Recomendation":model    
                        })
            })
        }                        
})
}
module.exports = movieHandler