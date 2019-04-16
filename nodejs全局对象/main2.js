function printHello(){
    console.log('Hello,World!');
}

//两秒后执行以上 函数
var t = setTimeout(printHello, 2000);

//清楚定时器
clearTimeout(t);