/*
console.warn("this is a warning");
console.error("this is an error");
*/
//let const var to declare. dont use var (causes issues with muliple names
//outside scope)
//const is constant
//always use const unless you are going to reassign. then use let
/*
let score = 10;
score = 11;
console.log(score);

const name = "Ben";
console.log(name);
*/

// String, Numbers, Boolean, null, undefined

const name = 'john';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

const introLine = `My name is ${name}, I am ${age} years old, with a rating of ${rating}.it is ${isCool} that I'm cool.`;
/*
const sp = introLine.substring(0,5);
const splitLine = introLine.split(', ');
*/
const fruit  = ['apple', 'oranges', 'peaches', true, 10];
fruit[5] = "grape";
fruit.push('Mango');
fruit.unshift('StrawBerry');
fruit.pop();
Array.isArray(fruit)
//console.log(fruit);'


const person = {
    firstName: 'Bon',
    lastName: 'Griggs',
    age: 29,
    address: {
        street: '1917 Shady Oak',
        city: 'Muskegan'
    }
}

person.email = 'something@gamil'
//console.log(person.firstName, person.lastName);

/*
//destructering
const { firstName, lastName, address: {city}} = person;

console.log(city);
*/
 
//convert to Json

const todos = [
    {
        id: 1,
        text:'trash',
        isComplete: false
    },
    {
        id: 2,
        text: 'work',
        isComplete: true
    },
    {
        id: 3,
        text: 'workout',
        isComplete: false
    }
];

/*
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
*/
/*
for(let i = 0; i < 10; i++){
    console.log(i);
}

let i = 0;
while(i<10){
    console.log(i);
    i++;
}
*/

/*
//foreach
todos.forEach(function(todos) {
    console.log(todos.text);
});
*/
//map -  maps to an array
/*
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);
*/
//filter
/*
const doneTodoText = todos.filter(function(todos) {
    return todos.isComplete === true;
}).map(function(todos) {
    return todos.text;
})

console.log(doneTodoText);
*/


//Conditionals === && > < <= >= 
/*
//ternary operator
const p = 10;
const color = p > 10 ? 'red' : 'blue'

switch(color) {
    case 'red':
        console.log('red');
        break;
    case 'blue':
        console.log('blue');
        break;
    default:
        console.log('not blue or red');
        break;
}
*/
/*
//functions
function addNums(num1 = 1, num2 = 2) {
    return num1+num2;
}

const addNums = (num1 = 1, num2 = 2) => num1 + num2;
const addFive = num3 => num3 + 5;
console.log(addFive(5));
*/
/*
function User(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

User.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}
*/

//class
/*
class User {
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const user1 =  new User('john','doe','03-12-1992');
const user2 = new User('Mary', 'Sue', '02-05-1990');
console.log(user1.getBirthYear());
console.log(user2.getFullName());

*/