const http=require('http')

const myServer=http.createServer((req, res)=>{
    if(req.url == '/')
    {
       res.write("<h1 style='color:red'>Welcome to the Homepage1</h2>")
       res.write("<h1>Welcome to the Homepage2</h1>")
       res.end()
    }
    else if(req.url == '/about')
    {
        res.end('This is the About Page, I changed NodeMon')
    }

    else if(req.url == '/contact')
        {
            res.end("<h1 style = 'color: blue'>This is Contact Page</h1>")
        }

        else if(req.url == '/service')
            {
                res.end('This is Service Page')
            }
    else
    {
        res.end('404 - Page Not Found');
    }
   
});

myServer.listen(3000,()=>

{
    console.log('Server running on http://localhost:3000');
});