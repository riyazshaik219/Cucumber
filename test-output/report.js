$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Automation/BDDFramework/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Free CRM Test scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User mousehover on contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User moves to new button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User places \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-test-scenario;;1"
    },
    {
      "cells": [
        "riyazu.shaik@gmail.com",
        "Testing@123",
        "suhail",
        "shaik",
        "Engineer"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;free-crm-test-scenario;;2"
    },
    {
      "cells": [
        "riyazushaik710@gmail.com",
        "Testing@123",
        "fahed",
        "shaik",
        "admin"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Test scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters \"riyazu.shaik@gmail.com\" and \"Testing@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User mousehover on contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User moves to new button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User places \"suhail\" and \"shaik\" and \"Engineer\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactDetailsDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 278916747706,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsDefinition.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 295341957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "riyazu.shaik@gmail.com",
      "offset": 13
    },
    {
      "val": "Testing@123",
      "offset": 42
    }
  ],
  "location": "ContactDetailsDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1836576988,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 683549559,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 3017434903,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsDefinition.user_moves_on_contacts_link()"
});
formatter.result({
  "duration": 108009888,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #main-nav \u003e a:nth-child(3)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RIYAZ\u0027, ip: \u0027192.168.43.224\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 80.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200818235255, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 5776, moz:profile: C:\\Users\\AM\\AppData\\Local\\T..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 6.1, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1e6a6eed-7997-4bf5-85ff-0bb082b46177\n*** Element info: {Using\u003dcss selector, value\u003d#main-nav \u003e a:nth-child(3)}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinitions.ContactDetailsDefinition.user_moves_on_contacts_link(ContactDetailsDefinition.java:62)\r\n\tat ✽.Then User mousehover on contacts link(D:/Automation/BDDFramework/src/main/java/Features/contacts.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ContactDetailsDefinition.user_moves_to_new_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "suhail",
      "offset": 13
    },
    {
      "val": "shaik",
      "offset": 26
    },
    {
      "val": "Engineer",
      "offset": 38
    }
  ],
  "location": "ContactDetailsDefinition.user_places_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactDetailsDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Test scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title of login page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters \"riyazushaik710@gmail.com\" and \"Testing@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User mousehover on contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User moves to new button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User places \"fahed\" and \"shaik\" and \"admin\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactDetailsDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 258400447870,
  "status": "passed"
});
formatter.match({
  "location": "ContactDetailsDefinition.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 439378822,
  "error_message": "org.openqa.selenium.NoSuchWindowException: Browsing context has been discarded\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RIYAZ\u0027, ip: \u0027192.168.43.224\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 80.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200818235255, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 4928, moz:profile: C:\\Users\\AM\\AppData\\Local\\T..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 6.1, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0052f5d4-6c08-4ddf-9ef9-8b744d4ad3d5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat StepDefinitions.ContactDetailsDefinition.title_of_login_page_is_Cogmento_CRM(ContactDetailsDefinition.java:27)\r\n\tat ✽.When Title of login page is Cogmento CRM(D:/Automation/BDDFramework/src/main/java/Features/contacts.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "riyazushaik710@gmail.com",
      "offset": 13
    },
    {
      "val": "Testing@123",
      "offset": 44
    }
  ],
  "location": "ContactDetailsDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactDetailsDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactDetailsDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactDetailsDefinition.user_moves_on_contacts_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactDetailsDefinition.user_moves_to_new_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "fahed",
      "offset": 13
    },
    {
      "val": "shaik",
      "offset": 25
    },
    {
      "val": "admin",
      "offset": 37
    }
  ],
  "location": "ContactDetailsDefinition.user_places_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactDetailsDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
});