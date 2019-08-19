const fs = require('fs');

fs.writeFileSync("Notes.txt","Hello my name is Anurag\n");
fs.appendFileSync("Notes.txt","I am learning NodeJS");