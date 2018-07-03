const fs = require('fs');

fs.readFile('./public/hello.txt', (err, data) => {
	if(err) {
		console.log('errrrroooooo');
	}
	console.log('1 - readFile',data.toString());
})

const file = fs.readFileSync('./public/hello.txt');
console.log('2 - readFileSync', file.toString());

fs.appendFile('./public/hello.txt', ' This is so cool!', err => {
	if (err) {
		console.log(err)
	}
})