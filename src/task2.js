const csv = require('csvtojson');
const fs = require('fs');

const rStream = fs.createReadStream('src/task2.csv');
const wStream = fs.createWriteStream('src/task2.txt');

rStream
  .pipe(
    csv({
      headers: ['book', 'author', 'amount', 'price'],
      checkType: true,
    })
  )
  .on('error', (error) => console.log(error))
  .pipe(wStream)
  .on('error', (error) => console.log(error));
