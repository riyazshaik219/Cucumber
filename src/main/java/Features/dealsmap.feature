Feature: Free CRM create contacts 
Scenario: Free CRM Test scenario 
	Given User is already on login page 
	When Title of login page is Cogmento CRM 
	Then User enters username and password 
		| username | password |
		| riyazu.shaik@gmail.com | Testing@123 |
	Then User clicks on login button 
	And User is on home page 
	Then User clicks on deals page 
	Then User moves to new deals page 
	And User places the deal details 
		| title | description | probability |
		| testDeal5 | testcase4 | 1000 |
		| testDeal6 | testcase5 | 2000 |
		| testDeal7 |testcase6 | 3000 |
	Then User quits the browser