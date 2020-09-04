$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Automation/BDDFramework/src/main/java/Features/tagging.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM application testing",
  "description": "",
  "id": "free-crm-application-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "create a contact",
  "description": "",
  "id": "free-crm-application-testing;create-a-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "this is a contact test case",
  "keyword": "Given "
});
formatter.match({
  "location": "taggingSteps.this_is_a_contact_test_case()"
});
formatter.result({
  "duration": 672779082,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "create a case",
  "description": "",
  "id": "free-crm-application-testing;create-a-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "this is a case test case",
  "keyword": "Given "
});
formatter.match({
  "location": "taggingSteps.this_is_a_case_test_case()"
});
formatter.result({
  "duration": 109718,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "verify left panel links",
  "description": "",
  "id": "free-crm-application-testing;verify-left-panel-links",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "clicking on left panel links",
  "keyword": "Given "
});
formatter.match({
  "location": "taggingSteps.clicking_on_left_panel_links()"
});
formatter.result({
  "duration": 237593,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "search a deal",
  "description": "",
  "id": "free-crm-application-testing;search-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "search deal test",
  "keyword": "Given "
});
formatter.match({
  "location": "taggingSteps.search_deal_test()"
});
formatter.result({
  "duration": 112876,
  "status": "passed"
});
});