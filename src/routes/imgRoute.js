const path = require('path');
const fs = require('fs');

const imgRoute = (callback)=>{
    const filePath = path.join(path.parse(__filename).root,'/news-portal-server','/public/img', 'img.jpg');
    //callback function to handle fs operations
    fs.readFile(filePath,(err,data)=>{
        if(err)
        {
            callback(err,null);
        }else
        {
            callback(null,data);
        }
    });
};

module.exports =imgRoute;