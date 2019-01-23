var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    config = require('./config'),
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

exports.T24AutoLogin = ()=>{
    driver.get(`${config.URL}`);

    driver.findElement(By.id('signOnName')).sendKeys(`${config.USERNAME}`);
    driver.findElement(By.id('password')).sendKeys(`${config.PASSWORD}`);
    driver.findElement(By.id('sign-in')).submit();
}

