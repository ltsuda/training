// https://developer.mozilla.org/en-US/docs/Learn/JavaScript
// https://academind.com/learn/javascript

const name = 'John'
let age = 28
const hasHobbies = true

age = 29

const summarizeUser = (userName, userAge, userHasHobbies) => {
  return `Name is ${userName}, age is ${userAge} and the user has hobbies: ${userHasHobbies}` // template strings
}

console.log(summarizeUser(name, age, hasHobbies))

// Improved arrow function
const add = (a, b) => a + b
console.log(add(1, 2))
