const express = require('express');
const app = express();
const mysql = require('mysql2');
const path = require('path');
require('ejs');
const {getHomePage} = require('./routes/home'); 
const {getAddPage} = require('./routes/player'); 

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
        //!connection to db is critical for this app, so we should stop the app if connection is not established.
        throw err;
    }
    console.log("Connection to the database is established.");
})

global.db = db;

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

app.get('/', getHomePage);
app.get('/add', getAddPage);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//* MVC = Model View Controller
 