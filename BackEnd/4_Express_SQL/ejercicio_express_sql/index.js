const express = require("express");
const app = express();
const mysql = require('mysql2');
require('dotenv').config()

app.use(express.json())

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

// Endpoints Crear
app.post('/createproduct',(req,res)=>{
    let post = {name_product:req.body.name_product, price:req.body.price};
    let sql = 'INSERT INTO expressDB.products SET ?'
    db.query(sql,post,(err,result)=> {
      if(err) throw err;
      console.log(result);
      res.send('Post in products added...')
    })
  })

app.post('/createcategory',(req,res)=>{
    let post = {name_category:req.body.name_category, _description:req.body._description};
    let sql = 'INSERT INTO expressDB.categories SET ?'
    db.query(sql,post,(err,result)=> {
      if(err) throw err;
      console.log(result);
      res.send('Post in categories added...')
    })
  })

// Endpoints Actualizar
app.put('/product/:id',(req,res)=>{
    let newTitle = req.body.name_product;
    let sql = `UPDATE expressDB.products SET name_product = '${newTitle}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('Post product updated...')
    })
  })

app.put('/category/:id',(req,res)=>{
    let newTitle = req.body._description;
    let sql = `UPDATE expressDB.categories SET _description = '${newTitle}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('Post category updated...')
    })
  })

app.listen(5000,()=>{
    console.log('servidor levantado en el puerto 5000')
})