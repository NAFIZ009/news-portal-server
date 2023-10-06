
const path = require('path');
const fileReadingFunc = require('../utils/fileReadingFunc');

const cssRoute = (callback)=>{
    const filePath = path.join(path.parse(__filename).root,'/news-portal-server','/public/css', 'style.css');
    fileReadingFunc(filePath,callback);
};

module.exports =cssRoute;