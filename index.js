// 1) Import
const express = require('express')
require("./connection")
var pModel=require("./model/product")

// 2)Initialize
const app = express()

//mid
app.use(express.json());


//3)API Creation
app.get('/hello',(req, res)=> {
    res.send('Hello World')
  })
//3.1)add API
app.post("/add",async(req, res)=>{
    try {
        await pModel(req.body).save()
        res.send({message:"Data added!!"})
    } catch (error) {
        console.log(error);
    }
})

//3.2)View API
app.get("/view",async(req,res)=>{
    try {
        const data=await pModel.find()
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})

//3.3)Update API
app.put("/up/:id",async(req,res)=>{
    try {
        const update=await pModel.findByIdAndUpdate(req.params.id,req.body)
        res.send("Data Update");
    } catch (error) {
        console.log(error);
    }
})

//3.4)DELETE API
app.delete("/del/:id",async(req,res)=>{
    try {
        await pModel.findByIdAndDelete(req.params.id)
        res.send("Data Deleted");
    } catch (error) {
        console.log(error);
    }
})

//4)Port Setting
app.listen(4000,()=>{
    console.log("Server is running")
})