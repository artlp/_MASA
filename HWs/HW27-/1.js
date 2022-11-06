const fs = require('fs');

const listOfFiles = fs.readdir('./to-read', 'utf8', () => {
    console.log("test");
})
console.log(listOfFiles);

// fs.readFile('readfile.txt','utf8', (err, data) => {
//  if (err) {
//     console.log(`error is ${err}`);
//  } else {
//     console.log(`data is ${data}`);
//     fs.mkdir('newDir',(err) => {
//         if (err) {
//             console.log("ERROR");
//         } else {
//             console.log("new dir was created");
//             fs.writeFile('./newDir/newTEXT.txt', data, (err) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log("new file was created as well");
//                 }
//             })
//         }
//     });
//  }
// })
// console.log(`I am written at the end.`);



/* fs.mkdir(dirIn,(err)=>{
    
    if (err) {
        
        if (err.message.search('file already exists')>-1) {
            fs.rmdir(dirIn,{recursive:true},(err)=>{
                if (err) console.log(err)
                else console.log('rmdir succeeded ☠️')
            })
        } else {
            console.log(err)
        }
    }
}) */