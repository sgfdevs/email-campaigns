// Why: this file ensures the tracking links are functionings by 
// replacing the '&#x27;' character substitue (generated during the react email export process) with '"' 

var fs = require('fs')

fs.readFile('./out/index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/&#x27;/g, '"');

  fs.writeFile('./out/index.html', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});