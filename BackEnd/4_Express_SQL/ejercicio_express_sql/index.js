const express = require("express");
const app = express();
const mysql = require('mysql2');

app.use(express.json())

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'GeraMysql17!',
  database:'expressDB'
});

db.connect();

app.get('/createdb',(req,res)=>{
    let sql ='CREATE DATABASE expressDB';
    db.query(sql,(err,result)=>{
      if(err)throw err;
      console.log(result);
      res.send('Database created...')
    })
  }) 

app.listen(5000,()=>{
    console.log('servidor levantado en el puerto 5000')
})