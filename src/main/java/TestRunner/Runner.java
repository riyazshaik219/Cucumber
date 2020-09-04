package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="D:\\Automation\\BDDFramework\\src\\main\\java\\Features\\tagging.feature"
		,glue= {"StepDefinitions"},
		format={"pretty","html:test-output"},
		monochrome=true,
		dryRun=false,
		strict=true,
		tags= {"~@End2End","~@RegressionTest"}
		
		//OR means  ={"@End2End,@RegressionTest"}--executes all tests as either @End2End OR @RegressionTes
		
		//AND means = {"@End2End","@RegressionTest"}--executes all tests tagged as  @End2End AND @RegressionTes
		
		
		
		
		)


public class Runner {

}
