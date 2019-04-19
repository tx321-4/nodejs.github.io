//更新数据
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: '3306',
    database : 'test'
});

connection.connect();

var modSql = 'UPDATE websites SET name= ?,url = ? WHERE id = ?';
var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',7];

//改
connection.query(modSql,modSqlParams, function(err, result){
    if(err){
        console.log('[UPDATE ERROR] - ', err.message);
        return;
    }

    console.log('-------------------------UPDATE-------------------------');
    console.log('UPDATE affectedRows:',result.affectedRows);
    console.log('--------------------------------------------------------\n\n');
});

connection.end();