Feature: Free CRM create contacts
Scenario Outline: Free CRM Test scenario
Given User is already on login page
When Title of login page is Cogmento CRM
Then User enters "<username>" and "<password>"
Then User clicks on login button
And User is on home page
Then User mousehover on contacts link
Then User moves to new button
Then User places "<firstname>" and "<lastname>" and "<position>"
Then User clicks on save button


Examples:
| username | password | firstname | lastname | position |
| riyazu.shaik@gmail.com | Testing@123 | suhail | shaik | Engineer |
| riyazushaik710@gmail.com | Testing@123 | fahed | shaik | admin |

