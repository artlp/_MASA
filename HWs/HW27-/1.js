const fs = require('fs');

const listOfFiles = fs.readdir('./to-read', 'utf8', () => {
    console.log("test");
})
console.log(listOfFiles);
fs.readdir('./to-read', function (err, items) {
// TODO
    if (err) {

        console.log(err)

    } else {

        fs.mkdir('Dir', (err) => {
            if (err) {

                console.log(err)

                if (err.message.search('file already exists')>-1) {

                    fs.rmdir('Dir',{recursive:true},(err)=>{

                        if (err) console.log(err)

                        else console.log('rmdir succeeded ☠️')
                    })
                }
            } else {

                for (let i = 0; i < items.length; i++) {

                    fs.readFile(./to-read/${items[i]}, 'utf8', (err, txt) => {
                        
                       if(err) console.log(err)

                       else {

                        fs.writeFile(./Dir/${items[i]}, txt, (err) => {

                            if (err) console.log(err)

                            else console.log('wow')
                        })
                       }
                    })
                }
            }
        })
    }
}