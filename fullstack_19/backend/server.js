/*Server.js*/
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

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


app.use(cors());
app.use(express.json());

/*Rotas*/
/*--------------------------------------------*/
app.get("/", (req, res) => {
    connection.query("SELECT COUNT(*) users FROM users", (err, results) => {
        if(err){
            res.send('MySQL connection error.');
        }
        res.send('MySQL connection Ok.');
    });
});


/*--------------------------------------------*/
app.get("/user/:id", (req, res) => {
    connection.query("SELECT id, username, created_at FROM users WHERE id = ?", [req.params.id], (err, results) => {
        if(err){
            res.send('MySQL connection error.');
        }
        res.json(results);
    });
});


/*--------------------------------------------*/
app.get("/user/:id/tasks/", (req, res) => {
    connection.query("SELECT * FROM tasks WHERE id_user = ?", [req.params.id], (err, results) => {
        if(err){
            res.send('MySQL connection error.');
        }
        res.json(results);
    });
});



/*--------------------------------------------*/
app.post("/user/tasks/update_status/", (req, res) => {
    // console.log(req.body.id_task);
    // console.log(req.body.status);

    connection.query("UPDATE tasks SET task_status = ?, updated_at = NOW() WHERE id = ?", [req.body.status, req.body.id_task], (err, results) => {
        if(err){
            res.send('MySQL connection error.');
        }
    });
    res.json('ok..');
});







/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    22/04/2023
*/
