const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send('hello world')
});

app.listen(3001, () => console.log('We are listening on port', 3001));