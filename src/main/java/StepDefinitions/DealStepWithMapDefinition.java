package StepDefinitions;

import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealStepWithMapDefinition {

	
	WebDriver driver;

	@Given("^User is already on login page$")
	public void user_is_already_on_login_page()  {
		
		driver= new FirefoxDriver();
		driver.get("https://ui.freecrm.com/");
	    
	}

	@When("^Title of login page is Cogmento CRM$")
	public void title_of_login_page_is_Cogmento_CRM()  {
		
		String actualTitle = driver.getTitle();
		System.out.println("Before Login Title is:"+actualTitle);
		String expectedTitle = "Cogmento CRM";
		Assert.assertEquals(expectedTitle, actualTitle);
	    
	}

	@Then("^User enters username and password$")
	public void user_enters_username_and_password(DataTable credentials)  {
		
		for(Map<String,String> data:credentials.asMaps(String.class, String.class)) {
		driver.findElement(By.name("email")).sendKeys(data.get("username"));
		driver.findElement(By.name("password")).sendKeys(data.get("password"));
	    
	}
	}

	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button()  {
		
		driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();
	    
	}

	@Then("^User is on home page$")
	public void user_is_on_home_page() throws InterruptedException  {
		
		String actualTitle = driver.getTitle();
		System.out.println("After login title is:"+actualTitle);
		String expectedTitle = "Cogmento CRM";
		Assert.assertEquals(expectedTitle, actualTitle);
		Thread.sleep(3000);
	}
	
	@Then("^User clicks on deals page$")
	public void user_clicks_on_deals_page() throws InterruptedException  {
	    
		driver.findElement(By.cssSelector("#main-nav>a:nth-child(5)")).click();
		Thread.sleep(3000);
	}

	@Then("^User moves to new deals page$")
	public void user_moves_to_new_deals_page()  {
		
		driver.findElement(By.xpath("\r\n" + 
				"//button[contains(text(),'New')]")).click();
	    
	}

	@Then("^User places the deal details$")
	public void user_places_the_deal_details(DataTable dealData) throws InterruptedException  {
		
	for(Map<String,String>	dealValues:dealData.asMaps(String.class, String.class)) {
		
		driver.findElement(By.name("title")).sendKeys(dealValues.get("title"));
		driver.findElement(By.xpath("//textarea[@name='description']")).sendKeys(dealValues.get("description"));
		driver.findElement(By.xpath("//input[@name='probability']")).sendKeys(dealValues.get("probability"));
		driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();//it saves the deals
		
		//Again goes back to create new deal
		Thread.sleep(2000);
		driver.findElement(By.cssSelector("#main-nav>a:nth-child(5)")).click();
		
		Thread.sleep(2000);
		driver.findElement(By.xpath("\r\n" + 
				"//button[contains(text(),'New')]")).click();
	    
	}
	    
	}

	@Then("^User quits the browser$")
	public void user_quits_the_browser()  {
	    
		driver.quit();
	}


}
