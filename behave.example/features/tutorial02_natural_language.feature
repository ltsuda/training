Feature: Fight or Flight (Natural Language, tutorial02)
 In order to increase the ninja survivor rate,
 As a ninja commander
 I want my ninjas to decide whether to take on an opponent
 based on their skill levels.

 Scenario: Weaker opponent
  Given the ninja has a third level black-belt
   When attacked by a samurai
   Then the ninja should engage the opponent

 Scenario: Weaker ninja
  Given the ninja has a third level white-belt
   When attacked by a samurai
   Then the ninja should run for his life
  
 Scenario: Stronger opponent
  Given the ninja has a third level black-belt
   When attacked by Chuck Norris
   Then the ninja should run for his life