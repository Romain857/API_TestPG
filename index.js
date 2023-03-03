const express = require('express');
const bodyParser = require('body-parser')
const port = 3000;
const app = express();
const db = require('./queries/test')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/tests', db.getAll)

app.get('/', (req, res) => {
    res.json({message: "API is running ..."});
});

app.listen(3000, () => {
    console.log(`app listening at http://localhost:${port}`);
});