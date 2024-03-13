$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/ActivitiesVal.feature");
formatter.feature({
  "name": "End to End test for Activity API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify the step of addAPI for Activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "A list of Activity are avilable",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps2.a_list_of_Activity_are_avilable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user add a one activity in list",
  "keyword": "When "
});
formatter.match({
  "location": "Steps2.user_add_a_one_activity_in_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has updated id two details in list",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps2.user_has_updated_id_two_details_in_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User removed id two detais in list",
  "keyword": "When "
});
formatter.match({
  "location": "Steps2.user_removed_id_two_detais_in_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "id two details activity is removed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps2.id_two_details_activity_is_removed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/BookValidation.feature");
formatter.feature({
  "name": "Books Details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Get the details of Books",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Get"
    }
  ]
});
formatter.step({
  "name": "User call getdetailsAPI with \"GET\" http request",
  "keyword": "Given "
});
formatter.match({
  "location": "steps1.user_call_getdetailsAPI_with_http_request(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the api got success with status code 200",
  "keyword": "When "
});
formatter.match({
  "location": "steps1.the_api_got_success_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"id\" in response body is 1",
  "keyword": "Then "
});
formatter.match({
  "location": "steps1.in_response_body_is(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if Book is being successfuly added",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Post"
    }
  ]
});
formatter.step({
  "name": "Add book payload with \"\u003cid\u003e\" \"\u003ctitle\u003e\" \"\u003cdescription\u003e\" \"\u003cpageCount\u003e\" \"\u003cexcerpt\u003e\" \"\u003cpublishDate\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user call bookaddapi wiht \"POST\" http request method",
  "keyword": "When "
});
formatter.step({
  "name": "the api call got succeess with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "\"id\" in response body is 0",
  "keyword": "And "
});
formatter.step({
  "name": "\"title\" in response body is \"string\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"description\" in response body is \"string\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"pageCount\" in response body is 0",
  "keyword": "And "
});
formatter.step({
  "name": "\"excerpt\" in response body is \"string\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"publishDate\" in response body is \"2024-03-10T21:17:14.777Z\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "title",
        "description",
        "pageCount",
        "excerpt",
        "publishDate"
      ]
    },
    {
      "cells": [
        "201",
        "Book 201",
        "Lorem lorem lorem Lorem lorem lorem",
        "20100",
        "Lorem Lorem lorem lorem nLorem lorem",
        "2023-08-25T21:26:22.0431225+00:00"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if Book is being successfuly added",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Post"
    }
  ]
});
formatter.step({
  "name": "Add book payload with \"201\" \"Book 201\" \"Lorem lorem lorem Lorem lorem lorem\" \"20100\" \"Lorem Lorem lorem lorem nLorem lorem\" \"2023-08-25T21:26:22.0431225+00:00\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps1.add_book_payload_with(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user call bookaddapi wiht \"POST\" http request method",
  "keyword": "When "
});
formatter.match({
  "location": "steps1.user_call_bookaddapi_wiht_http_request_method(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the api call got succeess with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "steps1.the_api_call_got_succeess_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"id\" in response body is 0",
  "keyword": "And "
});
formatter.match({
  "location": "steps1.in_response_body_is(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"title\" in response body is \"string\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps1.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"description\" in response body is \"string\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps1.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"pageCount\" in response body is 0",
  "keyword": "And "
});
formatter.match({
  "location": "steps1.in_response_body_is(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"excerpt\" in response body is \"string\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps1.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"publishDate\" in response body is \"2024-03-10T21:17:14.777Z\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps1.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get the details of specific Book",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Get2"
    }
  ]
});
formatter.step({
  "name": "user call getbookapi with \"GET\" http request",
  "keyword": "Given "
});
formatter.match({
  "location": "steps1.user_call_getbookapi_with_http_request(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the api got success with status code 200",
  "keyword": "When "
});
formatter.match({
  "location": "steps1.the_api_got_success_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"id\" in response body is 1",
  "keyword": "Then "
});
formatter.match({
  "location": "steps1.in_response_body_is(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if book is being successful updated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Put"
    }
  ]
});
formatter.step({
  "name": "Update book payload with \"\u003cid\u003e\" \"\u003ctitle\u003e\" \"\u003cdescription\u003e\" \"\u003cpageCount\u003e\" \"\u003cexcerpt\u003e\" \"\u003cpublishDate\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user call bookupdateapi wiht \"PUT\" http request method",
  "keyword": "When "
});
formatter.step({
  "name": "the api call got succeess with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "\"id\" in response body is 0",
  "keyword": "And "
});
formatter.step({
  "name": "\"title\" in response body is \"string\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"description\" in response body is \"string\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"pageCount\" in response body is 0",
  "keyword": "And "
});
formatter.step({
  "name": "\"excerpt\" in response body is \"string\"",
  "keyword": "And "
});
formatter.step({
  "name": "\"publishDate\" in response body is \"2024-03-10T21:17:14.777Z\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "title",
        "description",
        "pageCount",
        "excerpt",
        "publishDate"
      ]
    },
    {
      "cells": [
        "200",
        "Test2",
        "Loram Test1",
        "20200",
        "Test3",
        "2024-03-11T22:20:27.912Z"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if book is being successful updated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Put"
    }
  ]
});
formatter.step({
  "name": "Update book payload with \"200\" \"Test2\" \"Loram Test1\" \"20200\" \"Test3\" \"2024-03-11T22:20:27.912Z\"",
  "keyword": "Given "
});
formatter.match({
  "location": "steps1.update_book_payload_with(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user call bookupdateapi wiht \"PUT\" http request method",
  "keyword": "When "
});
formatter.match({
  "location": "steps1.user_call_bookupdateapi_wiht_http_request_method(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the api call got succeess with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "steps1.the_api_call_got_succeess_with_status_code(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"id\" in response body is 0",
  "keyword": "And "
});
formatter.match({
  "location": "steps1.in_response_body_is(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"title\" in response body is \"string\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps1.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"description\" in response body is \"string\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps1.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"pageCount\" in response body is 0",
  "keyword": "And "
});
formatter.match({
  "location": "steps1.in_response_body_is(String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"excerpt\" in response body is \"string\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps1.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"publishDate\" in response body is \"2024-03-10T21:17:14.777Z\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps1.in_response_body_is(String,String)"
});
formatter.result({
  "status": "passed"
});
});