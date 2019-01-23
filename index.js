(function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();

const express = require('express');
const app = express();
const script = require('./script.js')

app.get('/T24AutoLogin', (req, res) => {
    // res.send('An alligator approaches!');
    script.T24AutoLogin()
});

app.listen(3000, () => console.log('app listening on port 3000!'));