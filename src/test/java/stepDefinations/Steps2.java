package stepDefinations;

import io.cucumber.java.en.*;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import junit.framework.Assert;
import resources.Utils;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;


public class Steps2 extends Utils{
	
	private static RequestSpecification request;
	private static Response response;
	private static String jsonString;
	private static String titleId;
	
	
	@Given("A list of Activity are avilable")
	public void a_list_of_Activity_are_avilable() throws IOException {
	
		response = RestAssured.given().log().all().spec(requestSpecification()).when().get("/api/v1/Activities");
		
		jsonString = response.asString();
		List<Map<String, String>> title = JsonPath.from(jsonString).get("title");
		Assert.assertTrue(title.size() > 0);

	}

	@When("user add a one activity in list")
	public void user_add_a_one_activity_in_list() throws IOException {
	 
		response = RestAssured.given().spec(requestSpecification()).log().all()
		.body("{\n"
				+ "    \"id\": 0,\n"
				+ "    \"title\": \"string\",\n"
				+ "    \"dueDate\": \"2024-03-12T18:40:39.623Z\",\n"
				+ "    \"completed\": true\n"
				+ "}").when().post("/api/v1/Activities");
		
		Assert.assertEquals(200, response.getStatusCode());

	}

	@Then("user has updated id two details in list")
	public void user_has_updated_id_two_details_in_list() throws IOException {
	 
		response =  RestAssured.given().log().all().spec(requestSpecification()).body("{\n"
            		+ "    \"id\": 2,\n"
            		+ "    \"title\": \"Test\",\n"
            		+ "    \"dueDate\": \"2024-03-13T18:40:39.623Z\",\n"
            		+ "    \"completed\": true\n"
            		+ "}").when().put("/api/v1/Activities");
		
		jsonString  = response.asString();
		
            
		
		
		
	}

	@When("User removed id two detais in list")
	public void user_removed_id_two_detais_in_list() throws IOException {
		
	
		response = RestAssured.given().spec(requestSpecification()).delete("/api/v1/Activities/2");
		
		Assert.assertEquals(200, response.getStatusCode());
		
	}

	@Then("id two details activity is removed")
	public void id_two_details_activity_is_removed() {
		
		Assert.assertEquals(200, response.getStatusCode());

	


		
	}

}
