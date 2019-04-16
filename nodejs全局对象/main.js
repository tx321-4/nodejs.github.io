//输出全局变量 __filename 的值表示当前正在执行的脚本的文件名。
//它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 
//如果在模块中，返回的值是模块文件的路径。
console.log(__filename);

//__dirname 表示当前执行脚本所在的目录
console.log(__dirname);

//setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
//返回一个代表定时器的句柄值。

function printHello(){
    console.log('Hello World!');
}
//两秒后执行以上函数
setTimeout(printHello, 2000);
