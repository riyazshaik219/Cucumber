Feature: Free CRM Login feature

#Without using Examples keyword
#Scenario: Free CRM Test scenario
#Given User is already on login page
#When Title of login page is Cogmento CRM
#Then User enters "riyazu.shaik@gmail.com" and "Testing@123"
#Then User clicks on login button
#And User is on home page



#using Examples keyword
Scenario Outline: Free CRM Test scenario
Given User is already on login page
When Title of login page is Cogmento CRM
Then User enters "<username>" and "<password>"
Then User clicks on login button
And User is on home page

Examples:
| username | password |
| riyazu.shaik@gmail.com | Testing@123 |
| riyazushaik710@gmail.com | Testing@123 |
