Feature: Functional Scenarios - Book Store

  @e2e
  Scenario: User is successfully able to login to book store
    Given As a user, I visit the login page
    Then I enter my login details and login successfully

  @e2e
  Scenario: User is able to select a book from book store and view book details
    Given As a user, I login to book store
    Then I click book store link in the left menu
    And I add the book "Speaking JavaScript" to my collection
    And I click Profile link in left menu
    Then I validate that "1" book is added to my book collection
    And I am able to delete all the books from the collection

  @e2e
  Scenario: User is able to test the pagination on Book Store page by intercepting the GET Books call
    Given As a user, I login to book store
    When I intercept the GET Books call to stub the response
    Then Then pagination displays "2" pages
    And I click next button and navigate to second page
    And I validate that the book count on second page is "1"