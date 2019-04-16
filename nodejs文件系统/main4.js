var fs = require('fs');
//执行前创建一个空的目录 tmp/test/
console.log('准备删除目录 tmp');
fs.rmdir('tmp', function(err){
    if(err){
        return console.error(err);
    }
    console.log('读取 tmp目录');
    fs.readdir('tmp/', function(err, files){
        if(err){
            return console.error(err);
        }
        files.forEach(function(file){
            console.log(file);
        });
    });
});