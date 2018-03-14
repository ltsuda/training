Feature: Step Parameters (tutorial03)

    Scenario: Blenders
     Given I put "Red Tree Frog" in a Blender
      When I switch the blender on
      Then it should transform into "mush"

    Scenario: Blenders
     Given I put "apples" in a Blender
      When I switch the blender on
      Then it should transform into "apple juice"
    
    Scenario: Blenders
     Given I put "iPhone" in a Blender
      When I switch the blender on
      Then it should transform into "toxic waste"

    Scenario: Blenders
     Given I put "Galaxy Nexus" in a Blender
      When I switch the blender on
      Then it should transform into "toxic waste"