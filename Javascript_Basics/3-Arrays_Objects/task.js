
// 1. **Create a `getEvenNumbers` Function**
// Write a function that takes an array of numbers and returns an array containing only the even numbers.
const numbers = [1,2,3,4,5,6]
const getEvenNumbers = numbers.filter(num => num % 2 === 0)
console.log(getEvenNumbers)


// 2. **Map Over an Array**
// Write a function that takes an array of names and returns an array of greetings (e.g., "Hello, [name]!").
const names = ["john", "lucy", "susan"]

const greet = (names) => {
    return names.map(name => `hello, ${name}!`)
}
console.log(greet(names))


// 3. **Create a `getUserDetails` Function**
// Write a function that takes an object representing a user (with properties like `name` and `age`) and returns a formatted string introducing the user.

const users = [
    {name: "Gillian",
        Age: 46
    },
    {name: "Louise", 
        Age: 36
    },
    {name: "Carmen",
        Age: 7
    }
]

const getUserDetails = (user) => {
    return users.map(user => `my name is, ${user.name}, and im ${user.Age} years old`)
}
console.log(getUserDetails(users))


// 4. **Object Destructuring Task**
// Write a function that takes an object with properties `title`, `author`, and `year` and logs them using destructuring.

const books = [
    {
        title: "seven sisters",
        author: "Lucinda Williams",
        year: 2010
    },
    {
        title: "shadow sister",
        author: "Lucinda Williams",
        year: 2010
    }

]


