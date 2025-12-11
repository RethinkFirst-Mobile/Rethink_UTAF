Feature: Verifying the Forgot Credentials(Username/Password) Functionality of the Rethink-BH Mobile App

 Scenario Outline: Validating the Field Validations for Forgot  <type> validation
  Given User on the login screen
  When User tries to retrieve the "<type>" with "<email>"
  Then User should able to see the message "<message>"

  Examples:
   | type     | email            | message                                           |
   | username | dummy            | Input an email in the format: example@example.com |
   | username |                  | Email is required                                 |
   | username | test@rethink.com | Username reset link sent to your email            |
   | password | dummy            | Input an email in the format: example@example.com |
   | password |                  | Email is required                                 |
   | password | test@rethink.com | Password reset link sent to your email            |

