const fs = require('fs');

//function for fs reading
const fileReadingFunc=(filePath,callback)=>{
    //callback function to handle fs operations
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