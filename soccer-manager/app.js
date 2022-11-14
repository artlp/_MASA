const express = require('express');
const app = express();
const mysql = require('mysql2');

let port = 8000;
port = process.env.port || port;

//* database 
const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'fan',
    password: '123',
    database: 'soccer_manager'
})
db.connect(err => {
    if (err) {
        //!connection to db is critical for this app, so we should stop the app if the connection is not established.
        throw err;
    }
    console.log("connection to the database is established");
})


app.get('/', (req, res) => res.send(`Hello World!`));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//* MVC = Model View Controller
//* 