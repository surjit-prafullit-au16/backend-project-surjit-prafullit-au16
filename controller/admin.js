const User = require('../model/UserSchema')
const Movie = require('../model/MovieSchema')

const adminHandler = async (req,res)=>{
    User.findOne({_id: req.user.id},(err,user)=>{
        if(err){
            throw err
        }
        else{
            if(user.is_admin){
                const operation = req.body.operation
                if(operation == "add_movie"){
                    Movie.create({
                        name: req.body.name,
                        rating: req.body.rating,
                        year: req.body.year,
                        genre: req.body.genre,
                        numVotes: req.body.numVotes
                    })
                    res.send("Successfully added movie")
                } else if(operation == "delete_movie"){
                    Movie.findOne({name: req.body.name},function(err,movie){
                        if(movie == null){
                            res.send("Movie not found to delele!")
                        }
                        else{
                            Movie.deleteOne({'name':movie.name},function(err, result){
                                res.send("Successfully deleted....")
                            })
                        }
                    
                    })
                } 
            }else{
                res.status(404) 
                res.send(" Restricted area, you are not an admin")
            } 
        }
    })

}

module.exports = adminHandler