//删除数据
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port: '3306',
    database : 'test'
});

connection.connect();

var delSql = 'DELETE FROM websites WHERE id =7';


//删
connection.query(delSql, function(err, result){
    if(err){
        console.log('[DELETE ERROR] - ', err.message);
        return;
    }

    console.log('-------------------------DELETE-------------------------');
    console.log('DELETE affectedRows:',result.affectedRows);
    console.log('--------------------------------------------------------\n\n');
});

connection.end();