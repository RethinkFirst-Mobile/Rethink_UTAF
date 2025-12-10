Feature: Verifying the Login Functionality of the Rethink-BH Mobile App

 Scenario Outline: Verify the login functionality of the app using username: <username> and password: <password>
  Given User is on the login page
  When User tries logging into the app with "<username>" and "<password>"
  Then User validates is displayed

  Examples:
   | username  | password  |
   | Test1     | Test1     |
   | Test1     |           |
   |           | Test1     |
   | DataProp1 | DataProp1 |

