var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    config = require('./config'),
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get("http://41.78.73.114:9095/BrowserWeb");

driver.findElement(By.id('signOnName')).sendKeys(`${config.USERNAME}`);
driver.findElement(By.id('password')).sendKeys(`${config.PASSWORD}`);
driver.findElement(By.id('sign-in')).submit();

