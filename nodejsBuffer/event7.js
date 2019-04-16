var buf1 = Buffer.from('abcdefghijk1');
var buf2 = Buffer.from('RUNOOB');

//将buf2 插入到buf1指定位置上
buf2.copy(buf1,2);

console.log(buf1.toString());