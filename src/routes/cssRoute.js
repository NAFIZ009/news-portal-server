
const path = require('path');
const fileReadingFunc = require('../utils/fileReadingFunc');

const cssRoute = (callback)=>{
    const filePath = path.join(path.parse(__filename).root,'/news-portal-server','/public/css', 'style.css');
    //given file path and also a callback which will provide in server.js
    fileReadingFunc(filePath,callback);
};

module.exports =cssRoute;