//importing modules 
const http = require('http');
const htmlRoute = require('../src/routes/htmlRoute');
const cssRoute = require('../src/routes/cssRoute');
const jsRoute = require('../src/routes/jsRoute');
const imgRoute = require('../src/routes/imgRoute');

//http server
const server=http.createServer(async(req, res) => {

    //throwing error if the method is not get request
    if(req.method!='GET')
    {
        const error=new Error('Method Not Allowed');
        res.writeHead(405,{'Content-Type':'text/plain'});
        res.end(error.message);
        return;
    }
    
    //url based response
    switch(req.url)
    {
        //entry point
        case '/':
            res.writeHead(200,{'Content-Type':'text/html'});
            //callback function to handle fs operations
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
        //stylesheet api
        case '/stylesheets':
            res.writeHead(200,{'Content-Type':'text/css'});
            //callback function to handle fs operations
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
        //javascript api
        case '/js':
            res.writeHead(200,{'Content-Type':'	text/javascript'});
            //callback function to handle fs operations
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
        //image api
        case '/img':
            res.writeHead(200,{'Content-Type':'	image/jpeg'});
            //callback function to handle fs operations
            imgRoute((err,data)=>{
                if(err)
                {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                }else{
                    res.write(data);
                    res.end();
                }
                
            });
            break;
        case '/red':
            res.writeHead(301, { 'Location': `http://localhost:5001/img` });
            res.end();
            break;
        //if other api hit
        default:
            res.writeHead(404,{'Content-Type': 'text/plain'});
            res.end('nothing found');
    }
});

//running on 5001 port
server.listen(5001,()=>{
    console.log('listening on port',5001);
});