/*
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
*/

const express = require('express');
const app = express();
var logger = require('morgan');

const routes = require("./app/routes/routes");

app.use(logger('dev'));

/*
app.get('/t24autologin', (req, res) => {
    res.send('An alligator approaches!');
    console.log("good oportunity")
    // script.T24AutoLogin()
});
*/

app.listen(3000, () => console.log('app listening on port 3000!'));

routes(app);