Feature: Search

  Scenario: Search PyPI
    Given I navigate to the PyPi Home page
    When I search for "selenium"
    Then I am taken to the PyPi Search Results page
    And I see a search result "selenium 3.10.0"