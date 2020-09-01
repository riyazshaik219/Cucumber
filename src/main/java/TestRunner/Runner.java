package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="D:\\Automation\\BDDFramework\\src\\main\\java\\Features\\login.feature"
		,glue= {"StepDefinitions"},
		format={"pretty","html:test-output"},
		dryRun=false
		//strict=true
		
		
		
		
		)


public class Runner {

}