const autoLogin = {}

autoLogin.get = (req,res)=>{
    console.log("inside controller")

    // res.status(200)
    // const script = require('../../app/helper/script.js')
    // script.T24AutoLogin()

    var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    config = require('../../app/config/config.js'),
    until = require('selenium-webdriver').until;

    var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();    
        driver.get(`${config.URL}`);

        driver.findElement(By.id('signOnName')).sendKeys(`${config.USERNAME}`);
        driver.findElement(By.id('password')).sendKeys(`${config.PASSWORD}`);
        driver.findElement(By.id('sign-in')).submit();
    
}

module.exports = {
    autoLogin
}