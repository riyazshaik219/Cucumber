package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
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
	public void user_enters_username_and_password()  {
		
		driver.findElement(By.name("email")).sendKeys("riyazu.shaik@gmail.com");
		driver.findElement(By.name("password")).sendKeys("Testing@123");
	    
	}

	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button()  {
		
		driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();
	    
	}

	@Then("^User is on home page$")
	public void user_is_on_home_page()  {
		
		String actualTitle = driver.getTitle();
		System.out.println("After login title is:"+actualTitle);
		String expectedTitle = "Cogmento CRM";
		Assert.assertEquals(expectedTitle, actualTitle);
	    
	}
	
}
