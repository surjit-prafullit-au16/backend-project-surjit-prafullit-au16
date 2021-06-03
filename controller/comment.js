const Comment = require('../model/commentSchema')
const Movie = require('../model/MovieSchema')

const commentHandler= (req, res)=>{
    Comment.create({
        body: req.body.comment,
        user_id: req.user.id,
        movie_id: req.body.movie_id   
    },(error,comment)=>{
        if(error){
            return console.log(error)
        }
        Movie.findOneAndUpdate({_id : comment.movie_id}, {$push:{comments : comment._id}},(err,result)=>{
            if (err){
                return console.log(err)
            }
            res.send("comment updated")
        }) 
    })
}
module.exports = commentHandler