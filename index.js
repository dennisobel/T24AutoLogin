const express = require('express');
const app = express();
const script = require('./script.js')

app.get('/T24AutoLogin', (req, res) => {
    // res.send('An alligator approaches!');
    script.T24AutoLogin()
});

app.listen(3000, () => console.log('app listening on port 3000!'));