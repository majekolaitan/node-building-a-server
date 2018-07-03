const fs = require('fs');

fs.readFile('./public/hello.txt', (err, data) => {
	if(err) {
		console.log('errrrroooooo');
	}
	console.log('1 - readFile',data.toString());
})

const file = fs.readFileSync('./public/hello.txt');
console.log('2 - readFileSync', file.toString());

// APPEND
/*fs.appendFile('./public/hello.txt', ' This is so cool!', err => {
	if (err) {
		console.log(err)
	}
})*/

// WRITE
fs.writeFile('./public/newFile.txt', ' Sad to see you go', err => {
	if (err) {
		console.log(err)
	}
})