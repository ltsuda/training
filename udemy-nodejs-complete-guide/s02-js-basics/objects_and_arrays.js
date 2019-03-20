// https://academind.com/learn/javascript/reference-vs-primitive-values/
const person = {
  name: 'John',
  age: 29,
  greet() {
    console.log("Hi, I'm " + this.name)
  }
}

person.greet()
console.log(person)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#
const hobbies = ['Sports', 'Cooking']
for (let hobby of hobbies) {
  console.log(hobby)
}
console.log(hobbies.map(hobby => 'Hobby: ' + hobby))

// https://academind.com/learn/javascript/reference-vs-primitive-values/
hobbies.push('Programming')
console.log(hobbies)

const newHobbies = [...hobbies, 'Gaming'] // spread
console.log(newHobbies)

const toArray = (...args) => args // rest
console.log(toArray(1, 2, 3))
