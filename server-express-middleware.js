const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log('Hellooooo from Terminal!')
	next();
});

app.get('/', (req, res) => {
	res.send('Hellooooo from Browser!');
});

app.listen(3000);