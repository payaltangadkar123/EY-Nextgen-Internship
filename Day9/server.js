const express=require('express')
const mongoose=require('mongoose')
const BrandName=require('./model')
const app=express()

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/demo').then(
    ()=>{
        console.log('DB is connected successfully')
    }
).catch(err=>console.log(err))



app.get('/', (req,res)=>{
    res.send("OK your GET method is working")
})

app.post('/addbrands',async(req, res)=>{
    const{brandname}=req.body
    try{
        const newData=new BrandName({brandname})
        await newData.save()
        return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err)
    }
})

//Display all brands
app.get('/getbrands',async(req, res)=>{
    try{
        const allData=await BrandName.find()
        return res.json(allData)
    }
    catch(err){
        console.log(err.message)
    }
})

//Display one brand using Id
app.get('/getbrands/:id',async(req, res)=>{
    try{
        const allData=await BrandName.findById(req.params.id)
        return res.json(allData)
    }
    catch(err){
        console.log(err.message)
    }
})

//Deleting brand
app.delete('/deletebrand/:id', async(req, res)=>{
    try{
        await BrandName.findByIdAndDelete(req.params.id)
        return res.json(await BrandName.find())

    }
    catch(err)
    {
        console.log(err.message)
    }
})

app.listen(3000, ()=>{
    console.log("Server has been started and running...")
})

