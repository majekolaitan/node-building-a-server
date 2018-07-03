// Express server
const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send("Hellooooo!");
});

app.listen(3000);