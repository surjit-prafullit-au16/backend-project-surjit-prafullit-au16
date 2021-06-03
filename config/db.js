const mongoose = require('mongoose')

mongoose.connect(process.env.mongoURI,{useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false})
   .then(()=>{
       console.log('connected to database');
   })
   .catch((err)=>{
       console.log('Erro in connecting to database',err)
   })