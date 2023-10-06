const http = require('http');
const htmlRoute = require('../src/routes/htmlRoute');
const cssRoute = require('../src/routes/cssRoute');
const jsRoute = require('../src/routes/jsRoute');
const server=http.createServer(async(req, res) => {
    if(req.method!='GET')
    {
        const error=new Error('Method Not Allowed');
        res.writeHead(405,{'Content-Type':'text/plain'});
        res.end(error);
        return;
    }
        
    switch(req.url)
    {
        case '/':
            res.writeHead(200,{'Content-Type':'text/html'});
            htmlRoute((err,data)=>{
                if(err)
                {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                }else{
                    res.end(data);
                }
                
            });
            break;
        case '/stylesheets':
            res.writeHead(200,{'Content-Type':'text/css'});
            cssRoute((err,data)=>{
                if(err)
                {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                }else{
                    res.end(data);
                }
                
            });
            break;
        case '/js':
            res.writeHead(200,{'Content-Type':'	text/javascript'});
            jsRoute((err,data)=>{
                if(err)
                {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                }else{
                    res.end(data);
                }
                
            });
            break;
        case '/img':
            res.writeHead(200,{'Content-Type':'	image/jpeg'});
            res.end('<h1>img page</h1>');
            // res.end(imgRoute( ));
            break;
        default:
            res.writeHead(404,{'Content-Type': 'text/plain'});
            res.end('nothing found');
    }
});

server.listen(5001,()=>{
    console.log('listening on port',5001);
});