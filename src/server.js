const http = require('http');

const server=http.createServer((req, res) => {
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
            res.end('<h1>home page</h1>');
            // res.end(htmlRoute( ));
            break;
        case '/stylesheets':
            res.writeHead(200,{'Content-Type':'text/css'});
            res.end('<h1>stylesheets page</h1>');
            // res.end(cssRoute( ));
            break;
        case '/js':
            res.writeHead(200,{'Content-Type':'	text/javascript'});
            res.end('<h1>js page</h1>');
            // res.end(jsRoute( ));
            break;
        case '/img':
            res.writeHead(200,{'Content-Type':'	image/jpeg'});
            res.end('<h1>img page</h1>');
            // res.end(imgRoute( ));
            break;
        default:
            res.writeHead(404);
            res.end(new Error('Not Found'));
    }
});

server.listen(5001,()=>{
    console.log('listening on port',5001);
})