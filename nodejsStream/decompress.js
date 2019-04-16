var fs = require('fs');
var zlib = require('zlib');

//解压input.txt.gz文件为input3.txt

fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input3.txt'));

console.log('文件解压完成。');