const express = require('express');

const app = express();

app.post('/profile', (req, res) => {
	console.log(req.body)
});

app.listen(3000);