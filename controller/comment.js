const db = require('../config/db')
const Comment = require('../model/commentSchema')

const commentHandler= (req, res)=>{
    Comment.create({
        body: req.body.comment,
        user_id: req.user.id,
        movie_id: req.body.movie_id   
    },(error,comment)=>{
        if(error){
            return console.log(error)
        }
        
        console.log(comment)
        res.send(comment)
    })
}

module.exports = commentHandler