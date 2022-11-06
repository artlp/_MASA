const fs = require('fs');

let data = fs.readFileSync('readfile.txt', 'utf8')
console.log(data);

fs.readFile('readfile.txt','utf8', (err, data) => {
 if (err) {
    console.log(`error is ${err}`);
 } else {
    console.log(`data is ${data}`);
    fs.mkdir('newDir',(err) => {
        if (err) {
            console.log("ERROR");
        } else {
            console.log("new dir was created");
            fs.writeFile('./newDir/newTEXT.txt', data, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("new file was created as well");
                }
            })
        }
    });
 }
})
console.log(`I am written at the end.`);