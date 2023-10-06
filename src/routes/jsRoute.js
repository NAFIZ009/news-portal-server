const fileReadingFunc = require('../utils/fileReadingFunc');
const path = require('path');

const jsRoute = (callback)=>{
    const filePath = path.join(path.parse(__filename).root,'/news-portal-server','/public/js', 'index.js');
    //given file path and also a callback which will provide in server.js
    fileReadingFunc(filePath,callback);
};

module.exports =jsRoute;