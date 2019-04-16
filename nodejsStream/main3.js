var fs = require('fs');

//创建一个可读流
var readerStream = fs.createReadStream('input2.txt');

//创建一个可写流
var writerStream = fs.createWriteStream('outinput2.txt');

//管道读写操作
//读取input2.txt文件内容， 并将内容写入到outinput2.txt文件中
readerStream.pipe(writerStream);

console.log('程序执行完毕。');