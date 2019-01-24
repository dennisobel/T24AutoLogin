let {autoLogin} = require("../../app/controllers/autologinController.js")

let appRouter = (app)=>{
    app.get("/autologin",autoLogin.get)
}

module.exports = appRouter