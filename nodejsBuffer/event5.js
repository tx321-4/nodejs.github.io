var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.xxxx.com'));
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('buffer3 内容: ' + buffer3.toString());
