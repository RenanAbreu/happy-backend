import express from "express"

import './database/connection.ts'



const app = express()

app.use(express.json())


app.get('/users/:id', (req,res)=>{

 return  res.json({message:'Hello Word'})
})




app.listen(3333)