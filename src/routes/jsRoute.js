const fileReadingFunc = require('../utils/fileReadingFunc');
const path = require('path');

const jsRoute = (callback)=>{
    const filePath = path.join(path.parse(__filename).root,'/news-portal-server','/public/js', 'index.js');
    fileReadingFunc(filePath,callback);
};

module.exports =jsRoute;