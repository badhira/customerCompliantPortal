const express = require('express')
const cors = require('cors');
var bodyparser = require('body-parser');
var app = new express();

app.use(cors());
app.use(bodyparser.json());
username = "admin"
password = "1234"

app.post('/adminLogin', (req, res) => {
    let userData = req.body

    if (!username) {
        res.status(401).send('invalid Username')
    } else if (password !== userData.password) {
        res.status(401).send('Invalid password')
    } else {
        res.status(200).send()
    }


})