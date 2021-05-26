const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/movieAPI',{useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false})
   .then(()=>{
       console.log('connected to database');
   })
   .catch((err)=>{
       console.log('Erro in connecting to database',err)
   })