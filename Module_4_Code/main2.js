var fs = require('fs');
fs.writeFile('input.txt', 'Hii Raisoni MCA Students', function (err) { 
 if (err)
 console.log(err);
 else
 console.log('Write operation complete.');
});