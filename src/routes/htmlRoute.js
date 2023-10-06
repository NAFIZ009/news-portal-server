const fileReadingFunc = require('../utils/fileReadingFunc');
const path = require('path');

const htmlRoute = (callback)=>{
    const filePath = path.join(path.parse(__filename).root,'/news-portal-server','/public/html', 'index.html');
    //given file path and also a callback which will provide in server.js
    fileReadingFunc(filePath,callback);
};

module.exports =htmlRoute;