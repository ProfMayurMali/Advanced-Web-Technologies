var fs = require('fs');
fs.writeFile('input.txt', 'Hii MCA Studnts', function (err) { 
 if (err)
 console.log(err);
 else
 console.log('Write operation complete.');
});