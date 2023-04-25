
let fs = require('fs')

const {iterate , clean_application} = require('./src/cleanApplication')

// reading json file into a variable
let data = JSON.parse(fs.readFileSync('mock_application.json','utf-8') , (err) => {
    if (err) {
        console.log(err);
    }
})

iterate(data)

// creating a clean json file
fs.writeFile('clean_application.json', JSON.stringify(clean_application, null, 2), (err) => {
    if (err) {
        console.log(err);
    }
});