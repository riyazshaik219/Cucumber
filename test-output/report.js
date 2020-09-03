$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Automation/BDDFramework/src/main/java/Features/deals.feature");
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
  "name": "User clicks on deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User places the deal details \"\u003cTitle\u003e\" and \"\u003cdescription\u003e\" and \"\u003cprobability\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User saves the deal",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Title",
        "description",
        "probability"
      ],
      "line": 14,
      "id": "free-crm-create-contacts;free-crm-test-scenario;;1"
    },
    {
      "cells": [
        "riyazushaik710@gmail.com",
        "Testing@123",
        "TestProject",
        "practicepoint",
        "100"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
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
  "name": "User clicks on deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User places the deal details \"TestProject\" and \"practicepoint\" and \"100\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User saves the deal",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 216591287758,
  "status": "passed"
});
formatter.match({
  "location": "DealsDefinition.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 71948971,
  "status": "passed"
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
  "location": "DealsDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 994866144,
  "status": "passed"
});
formatter.match({
  "location": "DealsDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 401497690,
  "status": "passed"
});
formatter.match({
  "location": "DealsDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 3014360430,
  "status": "passed"
});
formatter.match({
  "location": "DealsDefinition.user_clicks_on_deals_page()"
});
formatter.result({
  "duration": 6142784974,
  "status": "passed"
});
formatter.match({
  "location": "DealsDefinition.user_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 1256660437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestProject",
      "offset": 30
    },
    {
      "val": "practicepoint",
      "offset": 48
    },
    {
      "val": "100",
      "offset": 68
    }
  ],
  "location": "DealsDefinition.user_places_the_deal_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 3168333486,
  "status": "passed"
});
formatter.match({
  "location": "DealsDefinition.user_saves_the_deal()"
});
formatter.result({
  "duration": 557881385,
  "status": "passed"
});
});