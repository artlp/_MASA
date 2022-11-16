const express = require('express');
const fs = require('fs');
const path = require('path');
const replaceTemplateLaptop = require('./modules/replace-template-laptop');

const port = 8001;
const templatesDir = 'templates';
const dataDir = 'data';


const app = express();

const templateLaptopProduct = fs.readFileSync(path.join(__dirname, templatesDir, 'template-laptop-product.html'), 'utf8');
const templateOverwiew = fs.readFileSync(path.join(__dirname, templatesDir, 'template-overview.html'), 'utf8');
const templateProduct = fs.readFileSync(path.join(__dirname, templatesDir, 'template-product.html'), 'utf8');
const data = fs.readFileSync(path.join(__dirname, dataDir, 'data.json'), 'utf8');
const laptopList = JSON.parse(data);

 
app.set('data', path.join(__dirname, 'data'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    const list = laptopList.map(el => replaceTemplateLaptop(templateLaptopProduct, el));
    res.send(templateOverwiew.replace('{%CARDLIST%}', list.join('\n'))); 
})

app.get('/product/:id', (req, res) => {
    res.send(replaceTemplateLaptop(templateProduct, laptopList[req.params.id]))
})

app.listen(port, () => {
    console.log(`I'm listening on port ${port}`);
})
