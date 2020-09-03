Feature: Free CRM create contacts
Scenario Outline: Free CRM Test scenario
Given User is already on login page
When Title of login page is Cogmento CRM
Then User enters "<username>" and "<password>"
Then User clicks on login button
And User is on home page
Then User clicks on deals page
Then User moves to new deals page
And User places the deal details "<Title>" and "<description>" and "<probability>"
Then User saves the deal

Examples:
| username | password | Title | description | probability |
| riyazushaik710@gmail.com | Testing@123 | TestProject | practicepoint | 100 |