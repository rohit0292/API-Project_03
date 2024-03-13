Feature: Books Details

  @Get
  Scenario: Get the details of Books
    Given User call getdetailsAPI with "GET" http request
    When the api got success with status code 200
    Then "id" in response body is 1

  @Post
  Scenario Outline: Verify if Book is being successfuly added
    Given Add book payload with "<id>" "<title>" "<description>" "<pageCount>" "<excerpt>" "<publishDate>"
    When user call bookaddapi wiht "POST" http request method
    Then the api call got succeess with status code 200
    And "id" in response body is 0
    And "title" in response body is "string"
    And "description" in response body is "string"
    And "pageCount" in response body is 0
    And "excerpt" in response body is "string"
    And "publishDate" in response body is "2024-03-10T21:17:14.777Z"

    Examples: 
      | id  | title    | description                         | pageCount | excerpt                              | publishDate                       |
      | 201 | Book 201 | Lorem lorem lorem Lorem lorem lorem |     20100 | Lorem Lorem lorem lorem nLorem lorem | 2023-08-25T21:26:22.0431225+00:00 |

  @Get2
  Scenario: Get the details of specific Book
    Given user call getbookapi with "GET" http request
    When the api got success with status code 200
    Then "id" in response body is 1

  @Put
  Scenario Outline: Verify if book is being successful updated
    Given Update book payload with "<id>" "<title>" "<description>" "<pageCount>" "<excerpt>" "<publishDate>"
    When user call bookupdateapi wiht "PUT" http request method
    Then the api call got succeess with status code 200
    And "id" in response body is 0
    And "title" in response body is "string"
    And "description" in response body is "string"
    And "pageCount" in response body is 0
    And "excerpt" in response body is "string"
    And "publishDate" in response body is "2024-03-10T21:17:14.777Z"

    Examples: 
      | id  | title | description | pageCount | excerpt | publishDate              |
      | 200 | Test2 | Loram Test1 |     20200 | Test3   | 2024-03-11T22:20:27.912Z |
