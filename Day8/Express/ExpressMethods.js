const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/get", (req, res) =>{
    console.log("GET Request Successfull!");
    console.log(req.body);
    res.send("GET Req Successfully initiated");
})

app.put("/put", (req, res) =>{
    console.log("PUT REQUEST SUCCESSFULL");
    console.log(req.body);
    res.send(`Data Update Request Received`);
})

app.post("/post", (req, res) =>{
    console.log("POST REQUEST SUCCESSFULL");
    console.log(req.body);
    res.send('Data POST Request Received');
})

app.delete("/delete", (req, res) =>{
    console.log("DELETE REQUEST SUCCESSFULL");
    console.log(req.body);
    res.send('Data DELETE Request Received');
})

app.listen(PORT, () => {
    console.log(`Server established at ${PORT}`);
})