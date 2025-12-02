Feature: Verifying the Login Functionality of the Rethink-BH Mobile App

 Scenario Outline: Verify the login functionality of the app using username: <username> and password: <password>
  Given I am on the login page
  When I login with "<username>" and "<password>"
  Then I should see a flash message saying "<message>"
  Examples:
   | username  | password  |
   | DataProp1 | DataProp1 |
   | Test1     | Test1     |
   | Test1     |           |
   |           | Test1     |
