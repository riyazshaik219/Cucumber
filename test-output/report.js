$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Automation/BDDFramework/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Free CRM Test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "User enters username and password",
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
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
});