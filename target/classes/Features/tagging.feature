@FunctionalTest
Feature: Free CRM application testing
@SmokeTest @RegressionTest
Scenario: login with correct username and password
Given this is a valid login test
@RegressionTest
Scenario: login with Incorrect username and password
Given this is a Invalid login test
@SmokeTest
Scenario: create a contact
Given this is a contact test case
@RegressionTest
Scenario: create a deal
Given this is a deal test case
@SmokeTest
Scenario: create a case
Given this is a case test case
@SmokeTest
Scenario: verify left panel links
Given clicking on left panel links
@SmokeTest
Scenario: search a deal
Given search deal test
@SmokeTest @RegressionTest
Scenario: search a contact
Given search contact test
@SmokeTest @RegressionTest
Scenario: search a case
Given search case test
@SmokeTest @RegressionTest
Scenario: search a task
Given search task test
@SmokeTest @End2End
Scenario: search a call
Given search call test
@SmokeTest @End2End
Scenario: search a email
Given search email test
@SmokeTest @End2End
Scenario: search a docs
Given This is a  docs test
@End2End
Scenario: generate a report
Given This is a report test
@End2End
Scenario: logout from app
Given This is a logout test