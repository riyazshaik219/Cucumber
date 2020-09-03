package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class ContactDetailsDefinition {
	
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

	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username,String password)  {
		
		driver.findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
	    
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
	@Then("^User mousehover on contacts link$")
	public void user_moves_on_contacts_link() throws InterruptedException  {
		
		driver.findElement(By.cssSelector("#main-nav > a:nth-child(3)")).click();
		Thread.sleep(3000);
	   
	}
	
	@Then("^User moves to new button$")
	public void user_moves_to_new_button()  {
		
		driver.findElement(By.xpath("//button[contains(text(),'New')]")).click();
	    
	}

	@Then("^User places \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_places_and_and(String firstname, String lastname, String position)  {
		
		driver.findElement(By.name("first_name")).sendKeys(firstname);
		driver.findElement(By.name("last_name")).sendKeys(lastname);
		driver.findElement(By.name("position")).sendKeys(position);
	    
	}

	@Then("^User clicks on save button$")
	public void user_clicks_on_save_button()  {
	    
		driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
	}


	
}



