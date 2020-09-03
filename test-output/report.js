$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Automation/BDDFramework/src/main/java/Features/dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Free CRM Test scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-test-scenario",
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
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 6
    },
    {
      "cells": [
        "riyazu.shaik@gmail.com",
        "Testing@123"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User places the deal details",
  "rows": [
    {
      "cells": [
        "title",
        "description",
        "probability"
      ],
      "line": 13
    },
    {
      "cells": [
        "testDeal5",
        "testcase4",
        "1000"
      ],
      "line": 14
    },
    {
      "cells": [
        "testDeal6",
        "testcase5",
        "2000"
      ],
      "line": 15
    },
    {
      "cells": [
        "testDeal7",
        "testcase6",
        "3000"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User quits the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 212656161890,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.title_of_login_page_is_Cogmento_CRM()"
});
formatter.result({
  "duration": 73084828,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 1276985107,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 450759501,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 3038826759,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_clicks_on_deals_page()"
});
formatter.result({
  "duration": 7072762778,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 1334647055,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_places_the_deal_details(DataTable)"
});
formatter.result({
  "duration": 26677867902,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_quits_the_browser()"
});
formatter.result({
  "duration": 3404921051,
  "status": "passed"
});
});