const fs = require('fs');

fs.readFile('./public/hello.txt', (err, data) => {
	if(err) {
		console.log('errrrroooooo');
	}
	console.log(data);
})