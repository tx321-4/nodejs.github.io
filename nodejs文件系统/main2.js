var fs = require('fs');

//加上recursive - 是否以递归的方式创建目录，默认为 false。
//可以添加 recursive: true 参数，不管创建的目录 /tmp 和 /tmp/a 是否存在：
console.log('创建目录 tmp/test/');
fs.mkdir('tmp/test/',{ recursive: true },  (err) => {
    if (err) throw err;
    
    console.log('目录创建成功');
});