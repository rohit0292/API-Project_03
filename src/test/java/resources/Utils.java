package resources;

import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.*;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Properties;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;

public class Utils {
	
	private RequestSpecification requestSpec;
	private ResponseSpecification responseSpec;
	
	public RequestSpecification requestSpecification() throws IOException {
		
		if(requestSpec == null) {
		
		PrintStream log = new PrintStream(new FileOutputStream("Logging.txt"));
		
		requestSpec =  new RequestSpecBuilder().setBaseUri(GetglobalValue("baseurl")).setContentType(ContentType.JSON).addHeader("Content-Type", "application/json")
				                      .addFilter(RequestLoggingFilter.logRequestTo(log))
				                      .addFilter(ResponseLoggingFilter.logResponseTo(log)).build();
		return requestSpec;		
	}		
		return requestSpec;	
	}
	
	
	public ResponseSpecification responseSpecification() {
		
		
		responseSpec = new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build();
		
		return responseSpec;
		
	}
	
	
	
	
	
	public static String GetglobalValue(String key) throws IOException {
		
		String userdir = System.getProperty("user.dir");
		
		FileInputStream file = new FileInputStream(userdir+"/src/test/java/resources/global.properties");
		
		Properties pro = new Properties();
		pro.load(file);
		
		return pro.getProperty(key);
		
	}
	
	
	
	
	
	
public String getJsonPath(Response response, String key) {
		

		String resp=response.asString();
		
		JsonPath js = new JsonPath(resp);
		
		return js.get(key).toString();
	}

}
