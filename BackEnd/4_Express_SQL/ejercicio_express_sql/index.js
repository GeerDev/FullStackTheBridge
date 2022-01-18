const express = require("express");
const app = express();
const mysql = require('mysql2');
require('dotenv').config()

app.use(express.json())

console.log(process.env);

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'GeraMysql17!',
  database:'expressDB'
});

db.connect();

// Creamos la Base de Datos
app.get('/createdb',(req,res)=>{
    let sql ='CREATE DATABASE expressDB';
    db.query(sql,(err,result)=>{
      if(err)throw err;
      console.log(result);
      res.send('Database created...')
    })
  }) 

// Creamos las tablas
app.get('/createtableproducts',(req,res)=>{
    let sql = 'CREATE TABLE expressDB.products(id INT AUTO_INCREMENT,name_product VARCHAR(50),price INT,PRIMARY KEY(id))'
      db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Posts table products created...')
      })
    })

app.get('/createtablecategories',(req,res)=>{
    let sql = 'CREATE TABLE expressDB.categories(id INT AUTO_INCREMENT,name_category VARCHAR(50),_description VARCHAR(50),PRIMARY KEY(id))'
        db.query(sql,(err,result)=> {
          if(err) throw err;
          console.log(result);
          res.send('Posts table categories created...')
        })
    })

app.get('/createtableproductscategories',(req,res)=>{
    let sql = 'CREATE TABLE expressDB.productoscategorias(id INT AUTO_INCREMENT,product_id INT,category_id INT,PRIMARY KEY(id),FOREIGN KEY(product_id) REFERENCES expressDB.products(id),FOREIGN KEY(category_id) REFERENCES expressDB.categories(id))'
        db.query(sql,(err,result)=> {
          if(err) throw err;
          console.log(result);
          res.send('Posts table categories created...')
        })
    })


app.listen(5000,()=>{
    console.log('servidor levantado en el puerto 5000')
})