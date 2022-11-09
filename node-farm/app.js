const express = require('express');

const port = 8000;

const app = express();

app.get('/', (req,res) => {
    // console.log(req);
    res.send('<h2>Welcome to the server!</h2>')
})
app.get('/contacts', (req,res) => {
    // console.log(req);
    res.send('<h2>My phone number is 0552876599</h2>')
})
app.get('/profile/:id', (req,res) => {
    // console.log(req);
    res.send(`<h2>You have requested a profile of user with ID ${req.params.id}</h2>`)
})

app.listen(port,() => {
    console.log(`server live @ port ${port}`);
})