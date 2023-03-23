/*Server.js*/
const express = require('express');
const mysql = require('mysql');

// Opções de conexão com o MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fullstack_stack_db'
});


const app = new express();
app.listen(3000, () => {
    console.log("Servidor iniciado na porta: http://localhost:3000");
});


// Rotas
app.get("/", (req, res) => {
    // res.send('Olá Mundo!');
    connection.query("SELECT COUNT(*) users FROM users", (err, results) => {
        if(err){
            res.send(err.message);
        }
        res.send(results);
    });
});







/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    23/03/2023
*/
