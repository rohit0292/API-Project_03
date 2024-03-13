package cucumber.Options;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		
		features = "src/test/java/features",
		glue = {"stepDefinations"},
//		tags = {"@Get2"},
		dryRun = false,
		monochrome = false,
				plugin = { "pretty", "json:target/cucumber-reports/Cucumber.json",
						"junit:target/cucumber-reports/Cucumber.xml",
						"html:target/cucumber-reports"}
				)

public class RunTest {
	
	
	

}

