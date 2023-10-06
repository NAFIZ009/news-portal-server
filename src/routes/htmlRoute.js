const fileReadingFunc = require('../utils/fileReadingFunc');
const path = require('path');

const htmlRoute = (callback)=>{
    const filePath = path.join(path.parse(__filename).root,'/news-portal-server','/public/html', 'index.html');
    fileReadingFunc(filePath,callback);
};

module.exports =htmlRoute;