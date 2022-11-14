const express = require('express');
const port = 8000;
const app = express();
const path = require('path');
const fs = require('fs');
const replaceTemplate = require('./modules/replaceTemplate');

const templDir = 'templates';
const dataDir = 'data';
const templCardProd = fs.readFileSync(path.join(__dirname,templDir,'template-card-product.html'),'utf8');
const templOverview = fs.readFileSync(path.join(__dirname,templDir,'template-overview.html'),'utf8');
const templProd = fs.readFileSync(path.join(__dirname,templDir,'template-product.html'),'utf8');
const data = fs.readFileSync(path.join(__dirname,dataDir,'data.json'));
const productList = JSON.parse(data);
console.log(replaceTemplate(templCardProd, productList[3]));
// console.log(typeof templCardProd);
// console.log(templCardProd);
// console.log(templCardProd);
// console.log(templProd);
// console.log(templOverview);
// console.log(data);
console.log(productList[0].image);
app.get('/(|home|overview)', (req,res) => {
    const cardList = productList.map(el => replaceTemplate(templCardProd,el));
    res.send(templOverview.replace('{%CARDLIST%}',cardList.join('\n')));
})
app.get('/contacts', (req,res) => {
    // console.log(req);
    res.send('<h2>My phone number is 0552876599</h2>')
})
app.get('/profile/:id', (req,res) => {
    res.send(`<h2>You have requested a profile of user with ID ${req.params.id}</h2>`)
})
app.get('/product/:id', (req,res) => {
    // console.log(req);
    res.send(replaceTemplate(templProd,productList[req.params.id]))
})

app.listen(port,() => {
    console.log(`server live @ port ${port}`);
})
