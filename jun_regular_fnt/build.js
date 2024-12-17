const fs = require('fs');
const font = require('./jun_regular.json');
const write = require('write-bmfont-binary');

//write the font object to a Buffer
const buffer = write(font);
fs.writeFile('jun_regular.fnt', buffer, function(err) {
  if (err) throw err
})