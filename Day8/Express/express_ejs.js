const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine','ejs');

app.get("/",(req, res)=>{
    res.render('home',{username});
})

app.get("/about",(req, res)=>{
    res.render('about');
})

app.get("/contact",(req, res)=>{
    res.render('contact');
})

app.get("/",(req, res)=>{
    const username="Payal Tangadkar";
    res.render('contact');
})

app.listen(PORT,()=>{
    console.log("Server running on" +PORT);
  })
  