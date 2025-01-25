const http=require('http')

const myServer=http.createServer((req, res)=>{
    res.write('Welcome to AVCOE')
    res.end()
})

myServer.listen(5000)
