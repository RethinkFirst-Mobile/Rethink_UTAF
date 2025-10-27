Feature: Login
  Scenario: User logs in successfully
    Given the app is launched
    When the user enters valid credentials
    Then the user should see the home screen
