const express=require('express')
const app=express()
const port=3000

app.get('/', (req, res)=>{
    res.send("This is Home Page")
})

app.get('/apple', (req, res)=>{
    res.send("<h1 style = 'color:black; background: yellow; text-align: center' >This is an Apple Page</h1>")
})

app.listen(port, ()=>{
    console.log("Server has been started and Running on port:" + port)
})




