package stepDefinations;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.equalTo;

import java.io.IOException;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import junit.framework.Assert;
import resources.TestDataBuild;
import resources.Utils;


public class steps1 extends Utils {

	ResponseBody body;
	static Response response;
	RequestSpecification req;
	ResponseSpecification res;
	
	TestDataBuild data = new TestDataBuild();
	
	
	@Given("User call getdetailsAPI with {string} http request")
	public void user_call_getdetailsAPI_with_http_request(String string) throws IOException  {
	
		
		response = given().spec(requestSpecification()).when().get("/api/v1/Books");
		
		
		
	}

	@When("the api got success with status code {int}")
	public static void the_api_got_success_with_status_code(Integer int1) {
		
		

		Assert.assertEquals(response.getStatusCode(),200);
		
	}

	@Then("{string} isn response body is {int}")
	public void isn_response_body_is(String keyValue, Integer Expectedvalue)  {
		
		body = response.getBody();
		
		// First get the JsonPath object instance from the Response interface
		
//		JsonPath jsonPathEvaluator = response.jsonPath();
//		String key  = jsonPathEvaluator.get(keyValue);
	
		String bodyAsString = body.asString();
		String bodypritystring = body.asPrettyString();
		
		Assert.assertEquals(bodyAsString.contains(keyValue),true);
		
		System.out.println("Response code :  " + bodypritystring);
		
    }
	
	@Given("Add book payload with {string} {string} {string} {string} {string} {string}")
	public void add_book_payload_with(String id, String title, String description, String pageCount, String excerpt, String publishDate) throws IOException {
		
		
	    
	    req =given().log().all().spec(requestSpecification()).body(data.AddBookpayload(id, title, description, pageCount, excerpt, publishDate));
	    

		
	}


	@When("user call bookaddapi wiht {string} http request method")
	public void user_call_bookaddapi_wiht_http_request_method(String string) {

		req.when().post("/api/v1/Books");
		
		
		
		
	}

	@Then("the api call got succeess with status code {int}")
	public void the_api_call_got_succeess_with_status_code(Integer int1) {
	   
		Assert.assertEquals(response.getStatusCode(),200);
		
	}

	@Then("{string} in response body is {int}")
	public void in_response_body_is(String string, Integer int1) {
	  
          body = response.getBody();
		

	
		String bodyAsString = body.asString();
		
		Assert.assertEquals(bodyAsString.contains(string),true);
		
	}

	@Then("{string} in response body is {string}")
	public void in_response_body_is(String string, String string2) {
	  
		String bodyAsString = body.asString();
		
		Assert.assertEquals(bodyAsString.contains(string),true);
		
		
	}
	
	@Given("user call getbookapi with {string} http request")
	public void user_call_getbookapi_with_http_request(String string) throws IOException {
	  
		response = given().spec(requestSpecification()).when().get("/api/v1/Books/3");
	}


	@Given("Update book payload with {string} {string} {string} {string} {string} {string}")
	public void update_book_payload_with(String id, String title, String description, String pageCount, String excerpt, String publishDate) throws IOException {
	    
		req =given().log().all().spec(requestSpecification()).body(data.AddBookpayload(id, title, description, pageCount, excerpt, publishDate));
		  
	}

	@When("user call bookupdateapi wiht {string} http request method")
	public void user_call_bookupdateapi_wiht_http_request_method(String string) {
	  
		req.when().put("/api/v1/Books/3");
		
		
	}
		
	
	


}
