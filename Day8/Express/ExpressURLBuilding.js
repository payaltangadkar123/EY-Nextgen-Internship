var express = require('express')
var app = express();

app.get('/things/:id([0-9]{4})', function(req, res){
    res.send('id:' +req.params.id);
});
app.listen(2000);