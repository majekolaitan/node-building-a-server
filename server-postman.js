const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}))

app.post('/profile', (req, res) => {
	console.log(req.body)
});

app.listen(3000);