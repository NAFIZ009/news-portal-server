const fs = require('fs');

const fileReadingFunc=(filePath,callback)=>{
    fs.readFile(filePath, 'utf8',(err,data)=>{
        if(err)
        {
            callback(err,null);
        }else
        {
            callback(null,data);
        }
    });
}

module.exports=fileReadingFunc;