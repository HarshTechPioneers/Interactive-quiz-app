import { Question } from '../types';

export const questions: Question[] = [
  // JavaScript Questions - Easy (20 questions)
  {
    id: 1,
    question: "What is the correct way to declare a variable in JavaScript?",
    options: ["var x = 5;", "variable x = 5;", "v x = 5;", "declare x = 5;"],
    correctAnswer: 0,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "Which method is used to add an element to the end of an array?",
    options: ["push()", "add()", "append()", "insert()"],
    correctAnswer: 0,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "How do you write 'Hello World' in an alert box?",
    options: ["alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');"],
    correctAnswer: 2,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "Which operator is used to assign a value to a variable?",
    options: ["*", "=", "x", "-"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "What will the following code return: Boolean(10 > 9)?",
    options: ["true", "false", "NaN", "undefined"],
    correctAnswer: 0,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 7,
    question: "How do you create a function in JavaScript?",
    options: ["function = myFunction() {}", "function myFunction() {}", "create myFunction() {}", "def myFunction() {}"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "How do you call a function named 'myFunction'?",
    options: ["call myFunction()", "myFunction()", "call function myFunction()", "Call.myFunction()"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 9,
    question: "How to write an IF statement in JavaScript?",
    options: ["if i == 5 then", "if i = 5 then", "if (i == 5)", "if i = 5"],
    correctAnswer: 2,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "How does a WHILE loop start?",
    options: ["while (i <= 10; i++)", "while i = 1 to 10", "while (i <= 10)", "while i <= 10"],
    correctAnswer: 2,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 11,
    question: "How does a FOR loop start?",
    options: ["for (i = 0; i <= 5)", "for i = 1 to 5", "for (i <= 5; i++)", "for (i = 0; i <= 5; i++)"],
    correctAnswer: 3,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 12,
    question: "How can you add a comment in JavaScript?",
    options: ["'This is a comment", "//This is a comment", "<!--This is a comment-->", "*This is a comment*"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 13,
    question: "What is the correct way to write a JavaScript array?",
    options: ["var colors = 'red', 'green', 'blue'", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
    correctAnswer: 2,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 14,
    question: "How do you round the number 7.25, to the nearest integer?",
    options: ["rnd(7.25)", "Math.round(7.25)", "Math.rnd(7.25)", "round(7.25)"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "Which method can be used to find the length of a string?",
    options: ["length()", "getSize()", "len()", "length"],
    correctAnswer: 3,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 16,
    question: "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
    options: ["document.getElement('p').innerHTML = 'Hello World!';", "document.getElementById('demo').innerHTML = 'Hello World!';", "#demo.innerHTML = 'Hello World!';", "document.getElementByName('p').innerHTML = 'Hello World!';"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "Where is the correct place to insert a JavaScript?",
    options: ["The <head> section", "The <body> section", "Both the <head> section and the <body> section are correct", "The <footer> section"],
    correctAnswer: 2,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 18,
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"],
    correctAnswer: 2,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 19,
    question: "The external JavaScript file must contain the <script> tag.",
    options: ["True", "False"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "How do you write 'Hello World' in JavaScript?",
    options: ["echo 'Hello World'", "document.write('Hello World')", "print('Hello World')", "response.write('Hello World')"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "easy"
  },

  // JavaScript Questions - Medium (25 questions)
  {
    id: 21,
    question: "What does '===' operator do in JavaScript?",
    options: ["Assigns a value", "Compares values only", "Compares values and types", "Compares types only"],
    correctAnswer: 2,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 22,
    question: "What is the difference between 'let' and 'var'?",
    options: ["No difference", "let has block scope, var has function scope", "var has block scope, let has function scope", "let is faster than var"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 23,
    question: "What is hoisting in JavaScript?",
    options: ["Moving variables to the top", "A way to lift heavy objects", "Variable and function declarations are moved to the top of their scope", "A method to optimize code"],
    correctAnswer: 2,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 24,
    question: "What is the output of: console.log(typeof null)?",
    options: ["null", "undefined", "object", "boolean"],
    correctAnswer: 2,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 25,
    question: "Which method is used to remove the last element from an array?",
    options: ["pop()", "shift()", "slice()", "splice()"],
    correctAnswer: 0,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 26,
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: ["Refers to the current function", "Refers to the global object", "Refers to the object that owns the code", "Creates a new object"],
    correctAnswer: 2,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 27,
    question: "What is an IIFE in JavaScript?",
    options: ["Immediately Invoked Function Expression", "Internal Interface Function Expression", "Instant Inline Function Expression", "Integrated Invoked Function Expression"],
    correctAnswer: 0,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 28,
    question: "What is the difference between '==' and '==='?",
    options: ["No difference", "== compares values, === compares values and types", "=== compares values, == compares values and types", "== is faster than ==="],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 29,
    question: "What is event bubbling?",
    options: ["Events moving from child to parent", "Events moving from parent to child", "Events being cancelled", "Events being duplicated"],
    correctAnswer: 0,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 30,
    question: "What is the purpose of JSON.stringify()?",
    options: ["Parse JSON string", "Convert object to JSON string", "Validate JSON", "Format JSON"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 31,
    question: "What is the difference between undefined and null?",
    options: ["No difference", "undefined means not assigned, null means intentionally empty", "null means not assigned, undefined means intentionally empty", "Both are the same"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 32,
    question: "What is the purpose of the spread operator (...)?",
    options: ["To spread butter", "To expand arrays and objects", "To create loops", "To handle errors"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 33,
    question: "What is destructuring in JavaScript?",
    options: ["Breaking code", "Extracting values from arrays/objects", "Removing elements", "Optimizing performance"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 34,
    question: "What is a Promise in JavaScript?",
    options: ["A guarantee", "An object representing eventual completion of an async operation", "A type of loop", "A variable type"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 35,
    question: "What is the purpose of async/await?",
    options: ["To make code slower", "To handle asynchronous operations more elegantly", "To create animations", "To validate data"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 36,
    question: "What is the difference between map() and forEach()?",
    options: ["No difference", "map() returns new array, forEach() doesn't", "forEach() returns new array, map() doesn't", "map() is faster"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 37,
    question: "What is the purpose of the filter() method?",
    options: ["To sort arrays", "To create new array with elements that pass a test", "To remove all elements", "To reverse arrays"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 38,
    question: "What is the difference between slice() and splice()?",
    options: ["No difference", "slice() doesn't modify original, splice() does", "splice() doesn't modify original, slice() does", "Both modify original"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 39,
    question: "What is the purpose of the reduce() method?",
    options: ["To make arrays smaller", "To reduce a single value from array", "To remove duplicates", "To sort arrays"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 40,
    question: "What is event delegation?",
    options: ["Assigning events to delegates", "Using parent element to handle child events", "Removing events", "Creating custom events"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 41,
    question: "What is the purpose of Object.keys()?",
    options: ["To lock objects", "To get array of object's keys", "To create new objects", "To delete object properties"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 42,
    question: "What is template literal in JavaScript?",
    options: ["A design pattern", "String literals with embedded expressions", "A type of function", "A loop structure"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 43,
    question: "What is the purpose of the bind() method?",
    options: ["To tie shoelaces", "To create new function with specific 'this' value", "To combine arrays", "To validate data"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 44,
    question: "What is the difference between call() and apply()?",
    options: ["No difference", "call() takes arguments separately, apply() takes array", "apply() takes arguments separately, call() takes array", "call() is faster"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },
  {
    id: 45,
    question: "What is a callback function?",
    options: ["A function that calls back", "A function passed as argument to another function", "A function that returns values", "A recursive function"],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "medium"
  },

  // JavaScript Questions - Hard (25 questions)
  {
    id: 46,
    question: "What is a closure in JavaScript?",
    options: [
      "A function that returns another function",
      "A function that has access to variables in its outer scope",
      "A function that is immediately invoked",
      "A function that cannot be called"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 47,
    question: "What is the event loop in JavaScript?",
    options: [
      "A loop that handles events",
      "The mechanism that handles asynchronous callbacks",
      "A way to create infinite loops",
      "A method to optimize performance"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 48,
    question: "What is prototypal inheritance?",
    options: [
      "Inheriting from classes",
      "Objects inheriting directly from other objects",
      "A way to create private variables",
      "A method to optimize memory"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 49,
    question: "What is the difference between microtasks and macrotasks?",
    options: [
      "No difference",
      "Microtasks have higher priority than macrotasks",
      "Macrotasks have higher priority than microtasks",
      "They run simultaneously"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 50,
    question: "What is a WeakMap in JavaScript?",
    options: [
      "A map with weak references",
      "A map that can be garbage collected",
      "A map with weak keys that can be garbage collected",
      "A slower version of Map"
    ],
    correctAnswer: 2,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 51,
    question: "What is the purpose of Proxy in JavaScript?",
    options: [
      "To create proxy servers",
      "To intercept and customize operations on objects",
      "To hide object properties",
      "To optimize object access"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 52,
    question: "What is a generator function?",
    options: [
      "A function that generates random numbers",
      "A function that can be paused and resumed",
      "A function that creates other functions",
      "A function that optimizes performance"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 53,
    question: "What is the difference between Symbol and String?",
    options: [
      "No difference",
      "Symbol creates unique identifiers",
      "String is faster than Symbol",
      "Symbol can store more data"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 54,
    question: "What is tail call optimization?",
    options: [
      "Optimizing function calls at the end",
      "Optimizing recursive calls to prevent stack overflow",
      "Making function calls faster",
      "Reducing memory usage"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 55,
    question: "What is the purpose of Object.create()?",
    options: [
      "To copy objects",
      "To create object with specified prototype",
      "To delete objects",
      "To merge objects"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 56,
    question: "What is currying in JavaScript?",
    options: [
      "A cooking technique",
      "Transforming function with multiple args into sequence of functions",
      "A way to optimize functions",
      "A method to handle errors"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 57,
    question: "What is memoization?",
    options: [
      "Memorizing code",
      "Caching function results to optimize performance",
      "A way to store data",
      "A debugging technique"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 58,
    question: "What is the difference between deep and shallow copy?",
    options: [
      "No difference",
      "Deep copy copies nested objects, shallow copy doesn't",
      "Shallow copy copies nested objects, deep copy doesn't",
      "Deep copy is faster"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 59,
    question: "What is the purpose of Object.freeze()?",
    options: [
      "To cool down objects",
      "To make object immutable",
      "To stop object execution",
      "To optimize object performance"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 60,
    question: "What is a higher-order function?",
    options: [
      "A function with high priority",
      "A function that takes or returns other functions",
      "A function that runs faster",
      "A function with more parameters"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 61,
    question: "What is the difference between composition and inheritance?",
    options: [
      "No difference",
      "Composition uses 'has-a', inheritance uses 'is-a'",
      "Inheritance uses 'has-a', composition uses 'is-a'",
      "Composition is faster"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 62,
    question: "What is the purpose of the Reflect API?",
    options: [
      "To reflect light",
      "To provide methods for interceptable JavaScript operations",
      "To mirror objects",
      "To optimize reflection"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 63,
    question: "What is a polyfill?",
    options: [
      "A type of plastic",
      "Code that provides functionality not natively supported",
      "A way to optimize code",
      "A debugging tool"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 64,
    question: "What is the difference between debouncing and throttling?",
    options: [
      "No difference",
      "Debouncing delays execution, throttling limits frequency",
      "Throttling delays execution, debouncing limits frequency",
      "Both do the same thing"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 65,
    question: "What is the purpose of the AbortController?",
    options: [
      "To abort missions",
      "To cancel asynchronous operations",
      "To handle errors",
      "To optimize performance"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 66,
    question: "What is a service worker?",
    options: [
      "A worker in service industry",
      "A script that runs in background for PWA features",
      "A type of web worker",
      "A server-side script"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 67,
    question: "What is the difference between Map and Object?",
    options: [
      "No difference",
      "Map can have any key type, Object keys are strings/symbols",
      "Object can have any key type, Map keys are strings",
      "Map is slower than Object"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 68,
    question: "What is tree shaking?",
    options: [
      "Shaking trees for fruit",
      "Eliminating dead code from bundles",
      "A debugging technique",
      "A way to optimize DOM"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 69,
    question: "What is the purpose of BigInt?",
    options: [
      "To store big integers",
      "To handle integers larger than Number.MAX_SAFE_INTEGER",
      "To optimize integer operations",
      "To create large arrays"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },
  {
    id: 70,
    question: "What is the difference between for...in and for...of?",
    options: [
      "No difference",
      "for...in iterates keys, for...of iterates values",
      "for...of iterates keys, for...in iterates values",
      "for...in is faster"
    ],
    correctAnswer: 1,
    category: "javascript",
    difficulty: "hard"
  },

  // React Questions - Easy (20 questions)
  {
    id: 71,
    question: "What is JSX in React?",
    options: [
      "A JavaScript library",
      "A syntax extension for JavaScript",
      "A CSS framework",
      "A database query language"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 72,
    question: "Which hook is used to manage state in functional components?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: 1,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 73,
    question: "How do you create a React component?",
    options: ["function MyComponent() {}", "class MyComponent extends React.Component {}", "Both A and B", "const MyComponent = () => {}"],
    correctAnswer: 2,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 74,
    question: "What is the correct way to render a list in React?",
    options: ["Using for loop", "Using map() method", "Using forEach() method", "Using while loop"],
    correctAnswer: 1,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 75,
    question: "How do you pass data from parent to child component?",
    options: ["Using state", "Using props", "Using context", "Using refs"],
    correctAnswer: 1,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 76,
    question: "What is the purpose of key prop in React lists?",
    options: ["To style elements", "To help React identify which items have changed", "To pass data", "To handle events"],
    correctAnswer: 1,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 77,
    question: "How do you handle events in React?",
    options: ["Using addEventListener", "Using event handlers like onClick", "Using jQuery", "Using vanilla JavaScript"],
    correctAnswer: 1,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 78,
    question: "What is the default port for React development server?",
    options: ["3000", "8080", "5000", "4200"],
    correctAnswer: 0,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 79,
    question: "How do you create a React app?",
    options: ["npm create react-app", "npx create-react-app", "npm install react-app", "npx install react-app"],
    correctAnswer: 1,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 80,
    question: "What is the file extension for React components?",
    options: [".js", ".jsx", ".react", "Both .js and .jsx"],
    correctAnswer: 3,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 81,
    question: "How do you import React in a component?",
    options: ["import React from 'react'", "require('react')", "include React", "using React"],
    correctAnswer: 0,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 82,
    question: "What is the root element in a React app?",
    options: ["<html>", "<body>", "<div id='root'>", "<app>"],
    correctAnswer: 2,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 83,
    question: "How do you add CSS classes in JSX?",
    options: ["class='myClass'", "className='myClass'", "css='myClass'", "style='myClass'"],
    correctAnswer: 1,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 84,
    question: "What is the correct way to add inline styles in React?",
    options: ["style='color: red'", "style={{color: 'red'}}", "css={{color: 'red'}}", "styles={{color: 'red'}}"],
    correctAnswer: 1,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 85,
    question: "How do you comment in JSX?",
    options: ["// comment", "<!-- comment -->", "{/* comment */}", "/* comment */"],
    correctAnswer: 2,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 86,
    question: "What is the purpose of React.Fragment?",
    options: ["To create fragments", "To group elements without extra DOM node", "To handle errors", "To optimize performance"],
    correctAnswer: 1,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 87,
    question: "How do you conditionally render elements in React?",
    options: ["Using if-else statements", "Using ternary operator", "Using && operator", "All of the above"],
    correctAnswer: 3,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 88,
    question: "What is the purpose of ReactDOM.render()?",
    options: ["To create components", "To render React elements to DOM", "To handle events", "To manage state"],
    correctAnswer: 1,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 89,
    question: "How do you prevent default behavior in React events?",
    options: ["return false", "event.preventDefault()", "event.stopPropagation()", "event.cancel()"],
    correctAnswer: 1,
    category: "react",
    difficulty: "easy"
  },
  {
    id: 90,
    question: "What is the difference between controlled and uncontrolled components?",
    options: ["No difference", "Controlled components have React-controlled state", "Uncontrolled components have React-controlled state", "Controlled components are faster"],
    correctAnswer: 1,
    category: "react",
    difficulty: "easy"
  },

  // React Questions - Medium (25 questions)
  {
    id: 91,
    question: "What is the purpose of useEffect hook?",
    options: [
      "To manage state",
      "To perform side effects",
      "To create context",
      "To handle routing"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 92,
    question: "What is the dependency array in useEffect?",
    options: [
      "An array of components",
      "An array of values that trigger effect re-run",
      "An array of functions",
      "An array of states"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 93,
    question: "How do you optimize React component re-renders?",
    options: [
      "Using React.memo",
      "Using useMemo",
      "Using useCallback",
      "All of the above"
    ],
    correctAnswer: 3,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 94,
    question: "What is the purpose of useContext hook?",
    options: [
      "To create context",
      "To consume context values",
      "To manage global state",
      "To handle routing"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 95,
    question: "What is prop drilling?",
    options: [
      "Drilling holes in props",
      "Passing props through multiple component levels",
      "Optimizing props",
      "Validating props"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 96,
    question: "What is the purpose of useReducer hook?",
    options: [
      "To reduce component size",
      "To manage complex state logic",
      "To optimize performance",
      "To handle side effects"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 97,
    question: "What is the difference between useState and useReducer?",
    options: [
      "No difference",
      "useReducer is for complex state, useState for simple state",
      "useState is for complex state, useReducer for simple state",
      "useReducer is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 98,
    question: "What is the purpose of useCallback hook?",
    options: [
      "To call functions",
      "To memoize callback functions",
      "To handle events",
      "To optimize rendering"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 99,
    question: "What is the purpose of useMemo hook?",
    options: [
      "To memorize things",
      "To memoize expensive calculations",
      "To manage memory",
      "To optimize components"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 100,
    question: "What is the difference between useCallback and useMemo?",
    options: [
      "No difference",
      "useCallback memoizes functions, useMemo memoizes values",
      "useMemo memoizes functions, useCallback memoizes values",
      "useCallback is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 101,
    question: "What is React.StrictMode?",
    options: [
      "A strict coding standard",
      "A tool to highlight potential problems",
      "A performance optimizer",
      "A debugging tool"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 102,
    question: "What is the purpose of Error Boundaries?",
    options: [
      "To create boundaries",
      "To catch JavaScript errors in component tree",
      "To handle network errors",
      "To validate props"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 103,
    question: "What is the difference between componentDidMount and useEffect?",
    options: [
      "No difference",
      "componentDidMount is for class components, useEffect for functional",
      "useEffect is for class components, componentDidMount for functional",
      "componentDidMount is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 104,
    question: "What is the purpose of React.lazy?",
    options: [
      "To make components lazy",
      "To enable code splitting and lazy loading",
      "To optimize performance",
      "To handle loading states"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 105,
    question: "What is Suspense in React?",
    options: [
      "A suspenseful component",
      "A component for handling loading states",
      "A way to suspend rendering",
      "A performance optimization"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 106,
    question: "What is the purpose of forwardRef?",
    options: [
      "To forward components",
      "To pass refs through components",
      "To optimize refs",
      "To handle ref errors"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 107,
    question: "What is the difference between controlled and uncontrolled inputs?",
    options: [
      "No difference",
      "Controlled inputs have React-managed value",
      "Uncontrolled inputs have React-managed value",
      "Controlled inputs are faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 108,
    question: "What is the purpose of useRef hook?",
    options: [
      "To create references",
      "To access DOM elements and persist values",
      "To optimize performance",
      "To handle events"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 109,
    question: "What is the difference between ref and state?",
    options: [
      "No difference",
      "ref doesn't trigger re-render, state does",
      "state doesn't trigger re-render, ref does",
      "ref is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 110,
    question: "What is the purpose of React.memo?",
    options: [
      "To memorize components",
      "To prevent unnecessary re-renders",
      "To optimize memory",
      "To handle memoization"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 111,
    question: "What is the difference between shallow and deep comparison?",
    options: [
      "No difference",
      "Shallow compares references, deep compares values",
      "Deep compares references, shallow compares values",
      "Shallow is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 112,
    question: "What is the purpose of PropTypes?",
    options: [
      "To create prop types",
      "To validate component props",
      "To optimize props",
      "To handle prop errors"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 113,
    question: "What is the difference between defaultProps and default parameters?",
    options: [
      "No difference",
      "defaultProps is React-specific, default parameters is ES6",
      "Default parameters is React-specific, defaultProps is ES6",
      "defaultProps is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 114,
    question: "What is the purpose of React DevTools?",
    options: [
      "To develop React",
      "To debug and profile React applications",
      "To optimize React",
      "To test React components"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },
  {
    id: 115,
    question: "What is the difference between React.createElement and JSX?",
    options: [
      "No difference",
      "JSX is syntactic sugar for React.createElement",
      "React.createElement is syntactic sugar for JSX",
      "JSX is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "medium"
  },

  // React Questions - Hard (25 questions)
  {
    id: 116,
    question: "What is the virtual DOM in React?",
    options: [
      "A real DOM element",
      "A lightweight copy of the real DOM",
      "A CSS framework",
      "A JavaScript engine"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 117,
    question: "How does React's reconciliation algorithm work?",
    options: [
      "It compares entire DOM trees",
      "It uses diffing algorithm to compare virtual DOM trees",
      "It rebuilds the entire DOM",
      "It uses machine learning"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 118,
    question: "What is React Fiber?",
    options: [
      "A type of fiber optic",
      "React's reconciliation engine rewrite",
      "A React component",
      "A performance optimization"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 119,
    question: "What is the purpose of React's concurrent features?",
    options: [
      "To run multiple React apps",
      "To enable interruptible rendering",
      "To optimize performance",
      "To handle concurrency"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 120,
    question: "What is time slicing in React?",
    options: [
      "Slicing time into pieces",
      "Breaking rendering work into chunks",
      "Optimizing time complexity",
      "Handling time zones"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 121,
    question: "What is the difference between React.Component and React.PureComponent?",
    options: [
      "No difference",
      "PureComponent implements shallow comparison in shouldComponentUpdate",
      "Component implements shallow comparison in shouldComponentUpdate",
      "PureComponent is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 122,
    question: "What is the purpose of getDerivedStateFromProps?",
    options: [
      "To get derived state",
      "To update state based on props changes",
      "To optimize state",
      "To handle state errors"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 123,
    question: "What is the difference between componentWillMount and componentDidMount?",
    options: [
      "No difference",
      "componentWillMount is deprecated, componentDidMount is for side effects",
      "componentDidMount is deprecated, componentWillMount is for side effects",
      "componentWillMount is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 124,
    question: "What is the purpose of getSnapshotBeforeUpdate?",
    options: [
      "To take snapshots",
      "To capture DOM info before updates",
      "To optimize updates",
      "To handle update errors"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 125,
    question: "What is the difference between componentDidUpdate and useEffect?",
    options: [
      "No difference",
      "componentDidUpdate is for class components, useEffect for functional",
      "useEffect is for class components, componentDidUpdate for functional",
      "componentDidUpdate is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 126,
    question: "What is the purpose of componentDidCatch?",
    options: [
      "To catch components",
      "To handle errors in component tree",
      "To optimize error handling",
      "To debug components"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 127,
    question: "What is the difference between useLayoutEffect and useEffect?",
    options: [
      "No difference",
      "useLayoutEffect runs synchronously after DOM mutations",
      "useEffect runs synchronously after DOM mutations",
      "useLayoutEffect is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 128,
    question: "What is the purpose of useImperativeHandle?",
    options: [
      "To handle imperatives",
      "To customize ref value exposed to parent",
      "To optimize handles",
      "To handle imperative code"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 129,
    question: "What is the difference between useEffect cleanup and componentWillUnmount?",
    options: [
      "No difference",
      "useEffect cleanup is for functional components, componentWillUnmount for class",
      "componentWillUnmount is for functional components, useEffect cleanup for class",
      "useEffect cleanup is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 130,
    question: "What is the purpose of React.createContext?",
    options: [
      "To create contexts",
      "To create context for sharing data across component tree",
      "To optimize context",
      "To handle context errors"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 131,
    question: "What is the difference between Context.Provider and Context.Consumer?",
    options: [
      "No difference",
      "Provider provides values, Consumer consumes values",
      "Consumer provides values, Provider consumes values",
      "Provider is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 132,
    question: "What is the purpose of React.cloneElement?",
    options: [
      "To clone elements",
      "To clone and modify React elements",
      "To optimize cloning",
      "To handle element errors"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 133,
    question: "What is the difference between React.Children.map and array.map?",
    options: [
      "No difference",
      "React.Children.map handles React children properly",
      "array.map handles React children properly",
      "React.Children.map is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 134,
    question: "What is the purpose of React.isValidElement?",
    options: [
      "To validate elements",
      "To check if object is valid React element",
      "To optimize validation",
      "To handle validation errors"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 135,
    question: "What is the difference between React.Fragment and div?",
    options: [
      "No difference",
      "Fragment doesn't create extra DOM node",
      "div doesn't create extra DOM node",
      "Fragment is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 136,
    question: "What is the purpose of React.Profiler?",
    options: [
      "To profile developers",
      "To measure rendering performance",
      "To optimize profiling",
      "To handle profiling errors"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 137,
    question: "What is the difference between server-side rendering and client-side rendering?",
    options: [
      "No difference",
      "SSR renders on server, CSR renders on client",
      "CSR renders on server, SSR renders on client",
      "SSR is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 138,
    question: "What is hydration in React?",
    options: [
      "Adding water to React",
      "Attaching event listeners to server-rendered markup",
      "Optimizing hydration",
      "Handling hydration errors"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 139,
    question: "What is the purpose of React.startTransition?",
    options: [
      "To start transitions",
      "To mark updates as non-urgent",
      "To optimize transitions",
      "To handle transition errors"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },
  {
    id: 140,
    question: "What is the difference between useDeferredValue and useTransition?",
    options: [
      "No difference",
      "useDeferredValue defers values, useTransition marks updates",
      "useTransition defers values, useDeferredValue marks updates",
      "useDeferredValue is faster"
    ],
    correctAnswer: 1,
    category: "react",
    difficulty: "hard"
  },

  // CSS Questions - Easy (20 questions)
  {
    id: 141,
    question: "Which CSS property is used to change the text color?",
    options: ["text-color", "font-color", "color", "text-style"],
    correctAnswer: 2,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 142,
    question: "How do you make text bold in CSS?",
    options: ["font-weight: bold;", "text-style: bold;", "font-style: bold;", "text-weight: bold;"],
    correctAnswer: 0,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 143,
    question: "Which property is used to change the background color?",
    options: ["bg-color", "background-color", "bgcolor", "back-color"],
    correctAnswer: 1,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 144,
    question: "How do you center text horizontally?",
    options: ["text-align: center;", "align: center;", "text-center: true;", "horizontal-align: center;"],
    correctAnswer: 0,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 145,
    question: "Which property is used to change the font size?",
    options: ["text-size", "font-size", "size", "text-style"],
    correctAnswer: 1,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 146,
    question: "How do you add a border to an element?",
    options: ["border: 1px solid black;", "border-style: solid;", "border-width: 1px;", "outline: 1px solid black;"],
    correctAnswer: 0,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 147,
    question: "Which property is used to add space inside an element?",
    options: ["margin", "padding", "spacing", "inner-space"],
    correctAnswer: 1,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 148,
    question: "Which property is used to add space outside an element?",
    options: ["margin", "padding", "spacing", "outer-space"],
    correctAnswer: 0,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 149,
    question: "How do you hide an element in CSS?",
    options: ["visibility: hidden;", "display: none;", "opacity: 0;", "All of the above"],
    correctAnswer: 3,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 150,
    question: "Which property is used to change the width of an element?",
    options: ["width", "size", "w", "element-width"],
    correctAnswer: 0,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 151,
    question: "How do you make text italic in CSS?",
    options: ["font-style: italic;", "text-style: italic;", "font-weight: italic;", "text-decoration: italic;"],
    correctAnswer: 0,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 152,
    question: "Which property is used to change the height of an element?",
    options: ["height", "size", "h", "element-height"],
    correctAnswer: 0,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 153,
    question: "How do you underline text in CSS?",
    options: ["text-decoration: underline;", "text-style: underline;", "font-decoration: underline;", "text-underline: true;"],
    correctAnswer: 0,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 154,
    question: "Which property is used to change the cursor when hovering over an element?",
    options: ["cursor", "pointer", "hover", "mouse"],
    correctAnswer: 0,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 155,
    question: "How do you make an element transparent?",
    options: ["transparency: 0.5;", "opacity: 0.5;", "alpha: 0.5;", "transparent: 0.5;"],
    correctAnswer: 1,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 156,
    question: "Which property is used to change the list style?",
    options: ["list-style", "list-type", "bullet-style", "marker-style"],
    correctAnswer: 0,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 157,
    question: "How do you remove the default margin and padding from all elements?",
    options: ["* { margin: 0; padding: 0; }", "all { margin: 0; padding: 0; }", "body { margin: 0; padding: 0; }", "html { margin: 0; padding: 0; }"],
    correctAnswer: 0,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 158,
    question: "Which property is used to change the line height?",
    options: ["line-height", "text-height", "row-height", "line-spacing"],
    correctAnswer: 0,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 159,
    question: "How do you make text uppercase in CSS?",
    options: ["text-transform: uppercase;", "text-case: upper;", "font-case: uppercase;", "text-style: uppercase;"],
    correctAnswer: 0,
    category: "css",
    difficulty: "easy"
  },
  {
    id: 160,
    question: "Which property is used to add a shadow to text?",
    options: ["text-shadow", "font-shadow", "shadow", "text-effect"],
    correctAnswer: 0,
    category: "css",
    difficulty: "easy"
  },

  // CSS Questions - Medium (25 questions)
  {
    id: 161,
    question: "What does 'display: flex' do?",
    options: [
      "Makes the element flexible in size",
      "Creates a flexible container for layout",
      "Hides the element",
      "Makes the element transparent"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 162,
    question: "What is the difference between 'justify-content' and 'align-items' in flexbox?",
    options: [
      "No difference",
      "justify-content aligns main axis, align-items aligns cross axis",
      "align-items aligns main axis, justify-content aligns cross axis",
      "Both align the same axis"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 163,
    question: "What is the CSS Box Model?",
    options: [
      "A model for creating boxes",
      "Content, padding, border, and margin",
      "A layout technique",
      "A design pattern"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 164,
    question: "What is the difference between 'position: relative' and 'position: absolute'?",
    options: [
      "No difference",
      "relative is relative to normal position, absolute is relative to positioned ancestor",
      "absolute is relative to normal position, relative is relative to positioned ancestor",
      "relative is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 165,
    question: "What is the purpose of 'z-index'?",
    options: [
      "To set the zoom level",
      "To control stacking order of elements",
      "To set the z-coordinate",
      "To optimize performance"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 166,
    question: "What is the difference between 'em' and 'rem' units?",
    options: [
      "No difference",
      "em is relative to parent, rem is relative to root",
      "rem is relative to parent, em is relative to root",
      "em is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 167,
    question: "What is the purpose of CSS media queries?",
    options: [
      "To query media files",
      "To apply styles based on device characteristics",
      "To optimize media loading",
      "To handle media errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 168,
    question: "What is the difference between 'visibility: hidden' and 'display: none'?",
    options: [
      "No difference",
      "visibility: hidden keeps space, display: none removes space",
      "display: none keeps space, visibility: hidden removes space",
      "visibility: hidden is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 169,
    question: "What is the purpose of 'box-sizing: border-box'?",
    options: [
      "To create border boxes",
      "To include padding and border in element's total width/height",
      "To optimize box sizing",
      "To handle box errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 170,
    question: "What is the difference between 'float' and 'flexbox'?",
    options: [
      "No difference",
      "float is older layout method, flexbox is modern",
      "flexbox is older layout method, float is modern",
      "float is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 171,
    question: "What is the purpose of CSS pseudo-classes?",
    options: [
      "To create fake classes",
      "To style elements based on their state",
      "To optimize classes",
      "To handle class errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 172,
    question: "What is the difference between ':hover' and ':focus'?",
    options: [
      "No difference",
      ":hover is for mouse over, :focus is for keyboard/click focus",
      ":focus is for mouse over, :hover is for keyboard/click focus",
      ":hover is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 173,
    question: "What is the purpose of CSS pseudo-elements?",
    options: [
      "To create fake elements",
      "To style specific parts of elements",
      "To optimize elements",
      "To handle element errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 174,
    question: "What is the difference between '::before' and '::after'?",
    options: [
      "No difference",
      "::before inserts content before, ::after inserts content after",
      "::after inserts content before, ::before inserts content after",
      "::before is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 175,
    question: "What is the purpose of CSS transitions?",
    options: [
      "To transition between pages",
      "To animate property changes smoothly",
      "To optimize transitions",
      "To handle transition errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 176,
    question: "What is the difference between 'transition' and 'animation'?",
    options: [
      "No difference",
      "transition is for property changes, animation is for keyframe-based",
      "animation is for property changes, transition is for keyframe-based",
      "transition is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 177,
    question: "What is the purpose of CSS transforms?",
    options: [
      "To transform code",
      "To modify element's appearance and position",
      "To optimize transforms",
      "To handle transform errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 178,
    question: "What is the difference between 'translate' and 'position'?",
    options: [
      "No difference",
      "translate doesn't affect document flow, position does",
      "position doesn't affect document flow, translate does",
      "translate is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 179,
    question: "What is the purpose of CSS variables (custom properties)?",
    options: [
      "To create variables",
      "To store and reuse values throughout stylesheet",
      "To optimize variables",
      "To handle variable errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 180,
    question: "What is the difference between 'min-width' and 'max-width'?",
    options: [
      "No difference",
      "min-width sets minimum width, max-width sets maximum width",
      "max-width sets minimum width, min-width sets maximum width",
      "min-width is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 181,
    question: "What is the purpose of 'overflow' property?",
    options: [
      "To handle overflows",
      "To control what happens when content overflows container",
      "To optimize overflow",
      "To handle overflow errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 182,
    question: "What is the difference between 'overflow: hidden' and 'overflow: scroll'?",
    options: [
      "No difference",
      "hidden clips content, scroll adds scrollbars",
      "scroll clips content, hidden adds scrollbars",
      "hidden is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 183,
    question: "What is the purpose of 'white-space' property?",
    options: [
      "To add white space",
      "To control how whitespace is handled",
      "To optimize whitespace",
      "To handle whitespace errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 184,
    question: "What is the difference between 'inline' and 'inline-block'?",
    options: [
      "No difference",
      "inline-block allows width/height, inline doesn't",
      "inline allows width/height, inline-block doesn't",
      "inline is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },
  {
    id: 185,
    question: "What is the purpose of 'vertical-align' property?",
    options: [
      "To align vertically",
      "To control vertical alignment of inline/table-cell elements",
      "To optimize vertical alignment",
      "To handle alignment errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "medium"
  },

  // CSS Questions - Hard (25 questions)
  {
    id: 186,
    question: "What is CSS Grid?",
    options: [
      "A JavaScript framework",
      "A 2D layout system for CSS",
      "A design pattern",
      "A CSS preprocessor"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 187,
    question: "What is the difference between CSS Grid and Flexbox?",
    options: [
      "No difference",
      "Grid is 2D layout, Flexbox is 1D layout",
      "Flexbox is 2D layout, Grid is 1D layout",
      "Grid is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 188,
    question: "What is the purpose of 'grid-template-areas'?",
    options: [
      "To create grid templates",
      "To define named grid areas",
      "To optimize grid templates",
      "To handle template errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 189,
    question: "What is the difference between 'fr' unit and percentage in CSS Grid?",
    options: [
      "No difference",
      "fr distributes available space, percentage is fixed proportion",
      "percentage distributes available space, fr is fixed proportion",
      "fr is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 190,
    question: "What is the purpose of 'contain' property?",
    options: [
      "To contain elements",
      "To optimize rendering by isolating subtrees",
      "To contain styles",
      "To handle containment errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 191,
    question: "What is the difference between 'will-change' and 'transform'?",
    options: [
      "No difference",
      "will-change hints browser about changes, transform applies changes",
      "transform hints browser about changes, will-change applies changes",
      "will-change is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 192,
    question: "What is the purpose of CSS Houdini?",
    options: [
      "A magic trick",
      "To extend CSS with JavaScript APIs",
      "To optimize CSS",
      "To handle CSS errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 193,
    question: "What is the difference between 'paint' and 'layout' in browser rendering?",
    options: [
      "No difference",
      "layout calculates positions, paint fills pixels",
      "paint calculates positions, layout fills pixels",
      "layout is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 194,
    question: "What is the purpose of 'aspect-ratio' property?",
    options: [
      "To set aspect ratios",
      "To maintain width-to-height ratio",
      "To optimize ratios",
      "To handle ratio errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 195,
    question: "What is the difference between 'clamp()', 'min()', and 'max()' functions?",
    options: [
      "No difference",
      "clamp() sets range, min() sets minimum, max() sets maximum",
      "All do the same thing",
      "clamp() is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 196,
    question: "What is the purpose of 'scroll-behavior' property?",
    options: [
      "To control scroll behavior",
      "To enable smooth scrolling",
      "To optimize scrolling",
      "To handle scroll errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 197,
    question: "What is the difference between 'scroll-snap-type' and 'scroll-snap-align'?",
    options: [
      "No difference",
      "scroll-snap-type sets container behavior, scroll-snap-align sets item alignment",
      "scroll-snap-align sets container behavior, scroll-snap-type sets item alignment",
      "scroll-snap-type is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 198,
    question: "What is the purpose of 'backdrop-filter' property?",
    options: [
      "To filter backdrops",
      "To apply filters to area behind element",
      "To optimize filters",
      "To handle filter errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 199,
    question: "What is the difference between 'mask' and 'clip-path'?",
    options: [
      "No difference",
      "mask uses images/gradients, clip-path uses geometric shapes",
      "clip-path uses images/gradients, mask uses geometric shapes",
      "mask is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 200,
    question: "What is the purpose of 'shape-outside' property?",
    options: [
      "To create shapes outside",
      "To define shape for text wrapping",
      "To optimize shapes",
      "To handle shape errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 201,
    question: "What is the difference between 'logical' and 'physical' properties in CSS?",
    options: [
      "No difference",
      "logical properties adapt to writing mode, physical properties don't",
      "physical properties adapt to writing mode, logical properties don't",
      "logical properties are faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 202,
    question: "What is the purpose of 'container queries'?",
    options: [
      "To query containers",
      "To apply styles based on container size",
      "To optimize containers",
      "To handle container errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 203,
    question: "What is the difference between 'subgrid' and regular grid?",
    options: [
      "No difference",
      "subgrid inherits parent grid lines",
      "regular grid inherits parent grid lines",
      "subgrid is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 204,
    question: "What is the purpose of 'color-scheme' property?",
    options: [
      "To set color schemes",
      "To indicate which color schemes element can be rendered in",
      "To optimize color schemes",
      "To handle color errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 205,
    question: "What is the difference between 'prefers-color-scheme' and 'color-scheme'?",
    options: [
      "No difference",
      "prefers-color-scheme detects user preference, color-scheme sets element preference",
      "color-scheme detects user preference, prefers-color-scheme sets element preference",
      "prefers-color-scheme is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 206,
    question: "What is the purpose of 'accent-color' property?",
    options: [
      "To add accents",
      "To set accent color for form controls",
      "To optimize accents",
      "To handle accent errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 207,
    question: "What is the difference between 'gap' and 'margin' in CSS Grid/Flexbox?",
    options: [
      "No difference",
      "gap creates space between items, margin creates space around items",
      "margin creates space between items, gap creates space around items",
      "gap is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 208,
    question: "What is the purpose of 'isolation' property?",
    options: [
      "To isolate elements",
      "To create new stacking context",
      "To optimize isolation",
      "To handle isolation errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 209,
    question: "What is the difference between 'mix-blend-mode' and 'background-blend-mode'?",
    options: [
      "No difference",
      "mix-blend-mode blends with underlying content, background-blend-mode blends backgrounds",
      "background-blend-mode blends with underlying content, mix-blend-mode blends backgrounds",
      "mix-blend-mode is faster"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },
  {
    id: 210,
    question: "What is the purpose of 'overscroll-behavior' property?",
    options: [
      "To control overscroll",
      "To control what happens when scrolling past boundaries",
      "To optimize overscroll",
      "To handle overscroll errors"
    ],
    correctAnswer: 1,
    category: "css",
    difficulty: "hard"
  },

  // HTML Questions - Easy (20 questions)
  {
    id: 211,
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlink Text Markup Language"
    ],
    correctAnswer: 0,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 212,
    question: "Which HTML element is used for the largest heading?",
    options: ["<h6>", "<h1>", "<heading>", "<head>"],
    correctAnswer: 1,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 213,
    question: "Which HTML element is used to create a paragraph?",
    options: ["<paragraph>", "<p>", "<para>", "<pg>"],
    correctAnswer: 1,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 214,
    question: "Which HTML element is used to create a line break?",
    options: ["<break>", "<br>", "<lb>", "<newline>"],
    correctAnswer: 1,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 215,
    question: "Which HTML element is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: 1,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 216,
    question: "Which attribute is used to specify the URL in a hyperlink?",
    options: ["src", "href", "url", "link"],
    correctAnswer: 1,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 217,
    question: "Which HTML element is used to display an image?",
    options: ["<image>", "<img>", "<pic>", "<photo>"],
    correctAnswer: 1,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 218,
    question: "Which attribute is used to specify the image source?",
    options: ["src", "href", "url", "source"],
    correctAnswer: 0,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 219,
    question: "Which HTML element is used to create an unordered list?",
    options: ["<ul>", "<ol>", "<list>", "<ulist>"],
    correctAnswer: 0,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 220,
    question: "Which HTML element is used to create a list item?",
    options: ["<item>", "<li>", "<list-item>", "<i>"],
    correctAnswer: 1,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 221,
    question: "Which HTML element is used to create a table?",
    options: ["<table>", "<tab>", "<tbl>", "<grid>"],
    correctAnswer: 0,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 222,
    question: "Which HTML element is used to create a table row?",
    options: ["<row>", "<tr>", "<table-row>", "<trow>"],
    correctAnswer: 1,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 223,
    question: "Which HTML element is used to create a table cell?",
    options: ["<cell>", "<td>", "<tc>", "<table-cell>"],
    correctAnswer: 1,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 224,
    question: "Which HTML element is used to create a form?",
    options: ["<form>", "<input>", "<field>", "<submit>"],
    correctAnswer: 0,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 225,
    question: "Which HTML element is used to create a text input field?",
    options: ["<text>", "<input>", "<field>", "<textbox>"],
    correctAnswer: 1,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 226,
    question: "Which HTML element is used to create a button?",
    options: ["<button>", "<btn>", "<input>", "Both A and C"],
    correctAnswer: 3,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 227,
    question: "Which HTML element is used to create a dropdown list?",
    options: ["<dropdown>", "<select>", "<list>", "<option>"],
    correctAnswer: 1,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 228,
    question: "Which HTML element is used to create bold text?",
    options: ["<bold>", "<b>", "<strong>", "Both B and C"],
    correctAnswer: 3,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 229,
    question: "Which HTML element is used to create italic text?",
    options: ["<italic>", "<i>", "<em>", "Both B and C"],
    correctAnswer: 3,
    category: "html",
    difficulty: "easy"
  },
  {
    id: 230,
    question: "Which HTML element is used to create a division or section?",
    options: ["<div>", "<section>", "<division>", "Both A and B"],
    correctAnswer: 3,
    category: "html",
    difficulty: "easy"
  },

  // HTML Questions - Medium (25 questions)
  {
    id: 231,
    question: "What is the purpose of the <meta> tag?",
    options: [
      "To define metadata about the HTML document",
      "To create navigation menus",
      "To add styling to the page",
      "To insert images"
    ],
    correctAnswer: 0,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 232,
    question: "What is the difference between <div> and <span>?",
    options: [
      "No difference",
      "div is block-level, span is inline",
      "span is block-level, div is inline",
      "div is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 233,
    question: "What is the purpose of the 'alt' attribute in images?",
    options: [
      "To provide alternative text for accessibility",
      "To set image alignment",
      "To specify image size",
      "To add image effects"
    ],
    correctAnswer: 0,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 234,
    question: "What is the difference between <script> and <noscript>?",
    options: [
      "No difference",
      "script executes JavaScript, noscript shows content when JS is disabled",
      "noscript executes JavaScript, script shows content when JS is disabled",
      "script is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 235,
    question: "What is the purpose of the 'target' attribute in links?",
    options: [
      "To target specific elements",
      "To specify where to open the linked document",
      "To set link color",
      "To add link effects"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 236,
    question: "What is the difference between <ol> and <ul>?",
    options: [
      "No difference",
      "ol creates ordered list, ul creates unordered list",
      "ul creates ordered list, ol creates unordered list",
      "ol is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 237,
    question: "What is the purpose of the 'placeholder' attribute?",
    options: [
      "To place holders",
      "To provide hint text in input fields",
      "To set input size",
      "To validate input"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 238,
    question: "What is the difference between 'required' and 'disabled' attributes?",
    options: [
      "No difference",
      "required makes field mandatory, disabled makes field non-interactive",
      "disabled makes field mandatory, required makes field non-interactive",
      "required is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 239,
    question: "What is the purpose of the 'data-*' attributes?",
    options: [
      "To store data",
      "To store custom data attributes",
      "To validate data",
      "To optimize data"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 240,
    question: "What is the difference between <thead>, <tbody>, and <tfoot>?",
    options: [
      "No difference",
      "thead is header, tbody is body, tfoot is footer of table",
      "All are the same",
      "thead is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 241,
    question: "What is the purpose of the 'role' attribute?",
    options: [
      "To define roles",
      "To provide accessibility information",
      "To set element behavior",
      "To optimize performance"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 242,
    question: "What is the difference between <article> and <section>?",
    options: [
      "No difference",
      "article is standalone content, section is thematic grouping",
      "section is standalone content, article is thematic grouping",
      "article is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 243,
    question: "What is the purpose of the <figure> and <figcaption> elements?",
    options: [
      "To create figures",
      "To group media content with caption",
      "To add captions",
      "To optimize media"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 244,
    question: "What is the difference between <header> and <h1>?",
    options: [
      "No difference",
      "header is container for introductory content, h1 is heading element",
      "h1 is container for introductory content, header is heading element",
      "header is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 245,
    question: "What is the purpose of the <nav> element?",
    options: [
      "To navigate",
      "To define navigation links",
      "To create menus",
      "To optimize navigation"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 246,
    question: "What is the difference between <main> and <div>?",
    options: [
      "No difference",
      "main represents main content, div is generic container",
      "div represents main content, main is generic container",
      "main is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 247,
    question: "What is the purpose of the 'tabindex' attribute?",
    options: [
      "To create tabs",
      "To control tab order for keyboard navigation",
      "To index tabs",
      "To optimize tabbing"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 248,
    question: "What is the difference between 'id' and 'class' attributes?",
    options: [
      "No difference",
      "id is unique identifier, class is for grouping elements",
      "class is unique identifier, id is for grouping elements",
      "id is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 249,
    question: "What is the purpose of the <label> element?",
    options: [
      "To create labels",
      "To associate text with form controls",
      "To add descriptions",
      "To optimize forms"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 250,
    question: "What is the difference between <input type='submit'> and <button>?",
    options: [
      "No difference",
      "input submit is for forms, button is more versatile",
      "button is for forms, input submit is more versatile",
      "input submit is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 251,
    question: "What is the purpose of the 'autocomplete' attribute?",
    options: [
      "To complete automatically",
      "To control browser's autocomplete behavior",
      "To validate input",
      "To optimize completion"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 252,
    question: "What is the difference between <textarea> and <input type='text'>?",
    options: [
      "No difference",
      "textarea is for multi-line text, input text is for single line",
      "input text is for multi-line text, textarea is for single line",
      "textarea is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 253,
    question: "What is the purpose of the 'contenteditable' attribute?",
    options: [
      "To edit content",
      "To make element content editable",
      "To validate content",
      "To optimize editing"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 254,
    question: "What is the difference between <strong> and <b>?",
    options: [
      "No difference",
      "strong has semantic meaning, b is just visual",
      "b has semantic meaning, strong is just visual",
      "strong is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },
  {
    id: 255,
    question: "What is the purpose of the 'hidden' attribute?",
    options: [
      "To hide elements",
      "To hide element from display and accessibility tree",
      "To optimize hiding",
      "To handle hidden elements"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "medium"
  },

  // HTML Questions - Hard (25 questions)
  {
    id: 256,
    question: "What is the purpose of the <template> element?",
    options: [
      "To create templates",
      "To hold client-side content that won't be rendered",
      "To optimize templates",
      "To handle template errors"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 257,
    question: "What is the difference between <slot> and <template>?",
    options: [
      "No difference",
      "slot is for web components content insertion, template is for reusable markup",
      "template is for web components content insertion, slot is for reusable markup",
      "slot is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 258,
    question: "What is the purpose of Shadow DOM?",
    options: [
      "To create shadows",
      "To encapsulate DOM and CSS in web components",
      "To optimize DOM",
      "To handle DOM errors"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 259,
    question: "What is the difference between Custom Elements and regular HTML elements?",
    options: [
      "No difference",
      "Custom Elements are user-defined with custom behavior",
      "Regular elements are user-defined with custom behavior",
      "Custom Elements are faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 260,
    question: "What is the purpose of the 'is' attribute?",
    options: [
      "To check what something is",
      "To extend built-in elements with custom behavior",
      "To validate elements",
      "To optimize elements"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 261,
    question: "What is the difference between 'defer' and 'async' attributes in <script>?",
    options: [
      "No difference",
      "defer waits for HTML parsing, async doesn't",
      "async waits for HTML parsing, defer doesn't",
      "defer is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 262,
    question: "What is the purpose of the 'crossorigin' attribute?",
    options: [
      "To cross origins",
      "To configure CORS requests for external resources",
      "To optimize cross-origin requests",
      "To handle CORS errors"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 263,
    question: "What is the difference between 'preload' and 'prefetch' link relations?",
    options: [
      "No difference",
      "preload is for current page resources, prefetch is for future navigation",
      "prefetch is for current page resources, preload is for future navigation",
      "preload is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 264,
    question: "What is the purpose of the 'integrity' attribute?",
    options: [
      "To maintain integrity",
      "To verify resource hasn't been tampered with",
      "To optimize integrity checks",
      "To handle integrity errors"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 265,
    question: "What is the difference between 'modulepreload' and 'preload'?",
    options: [
      "No difference",
      "modulepreload is for ES modules, preload is for other resources",
      "preload is for ES modules, modulepreload is for other resources",
      "modulepreload is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 266,
    question: "What is the purpose of the 'loading' attribute in images?",
    options: [
      "To show loading state",
      "To control when image loads (lazy loading)",
      "To optimize loading",
      "To handle loading errors"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 267,
    question: "What is the difference between 'decoding' attribute values in images?",
    options: [
      "No difference",
      "sync blocks rendering, async doesn't, auto lets browser decide",
      "All do the same thing",
      "sync is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 268,
    question: "What is the purpose of the 'srcset' attribute?",
    options: [
      "To set sources",
      "To provide multiple image sources for responsive images",
      "To optimize sources",
      "To handle source errors"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 269,
    question: "What is the difference between 'sizes' and 'srcset' attributes?",
    options: [
      "No difference",
      "srcset provides image sources, sizes provides display sizes",
      "sizes provides image sources, srcset provides display sizes",
      "srcset is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 270,
    question: "What is the purpose of the <picture> element?",
    options: [
      "To display pictures",
      "To provide multiple image sources with media queries",
      "To optimize pictures",
      "To handle picture errors"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 271,
    question: "What is the difference between <source> in <picture> and <source> in <video>?",
    options: [
      "No difference",
      "picture source is for responsive images, video source is for multiple formats",
      "video source is for responsive images, picture source is for multiple formats",
      "picture source is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 272,
    question: "What is the purpose of the 'poster' attribute in <video>?",
    options: [
      "To create posters",
      "To show image before video plays",
      "To optimize posters",
      "To handle poster errors"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 273,
    question: "What is the difference between 'autoplay' and 'preload' in media elements?",
    options: [
      "No difference",
      "autoplay starts playing automatically, preload loads metadata/content",
      "preload starts playing automatically, autoplay loads metadata/content",
      "autoplay is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 274,
    question: "What is the purpose of the 'sandbox' attribute in <iframe>?",
    options: [
      "To create sandboxes",
      "To restrict iframe capabilities for security",
      "To optimize sandboxing",
      "To handle sandbox errors"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 275,
    question: "What is the difference between 'allow' and 'sandbox' attributes in <iframe>?",
    options: [
      "No difference",
      "sandbox restricts capabilities, allow grants specific permissions",
      "allow restricts capabilities, sandbox grants specific permissions",
      "sandbox is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 276,
    question: "What is the purpose of the 'referrerpolicy' attribute?",
    options: [
      "To set referrer policies",
      "To control referrer information sent with requests",
      "To optimize referrer handling",
      "To handle referrer errors"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 277,
    question: "What is the difference between 'noopener' and 'noreferrer' in link relations?",
    options: [
      "No difference",
      "noopener prevents access to opener, noreferrer prevents referrer info",
      "noreferrer prevents access to opener, noopener prevents referrer info",
      "noopener is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 278,
    question: "What is the purpose of the 'enterkeyhint' attribute?",
    options: [
      "To hint about enter key",
      "To customize virtual keyboard enter key",
      "To optimize enter key handling",
      "To handle enter key errors"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 279,
    question: "What is the difference between 'inputmode' and 'type' attributes?",
    options: [
      "No difference",
      "type defines input behavior, inputmode hints virtual keyboard type",
      "inputmode defines input behavior, type hints virtual keyboard type",
      "type is faster"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },
  {
    id: 280,
    question: "What is the purpose of the 'inert' attribute?",
    options: [
      "To make elements inert",
      "To make element and descendants non-interactive",
      "To optimize inert elements",
      "To handle inert errors"
    ],
    correctAnswer: 1,
    category: "html",
    difficulty: "hard"
  },

  // General Programming Questions - Easy (20 questions)
  {
    id: 281,
    question: "What is an algorithm?",
    options: [
      "A programming language",
      "A step-by-step procedure for solving a problem",
      "A type of database",
      "A web browser"
    ],
    correctAnswer: 1,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 282,
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Integration",
      "Automated Program Interaction",
      "Application Process Integration"
    ],
    correctAnswer: 0,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 283,
    question: "What is a variable in programming?",
    options: [
      "A constant value",
      "A container for storing data",
      "A type of function",
      "A programming language"
    ],
    correctAnswer: 1,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 284,
    question: "What is a function in programming?",
    options: [
      "A variable",
      "A reusable block of code",
      "A data type",
      "A programming language"
    ],
    correctAnswer: 1,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 285,
    question: "What is debugging?",
    options: [
      "Writing code",
      "Finding and fixing errors in code",
      "Running code",
      "Deleting code"
    ],
    correctAnswer: 1,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 286,
    question: "What is a loop in programming?",
    options: [
      "A type of variable",
      "A structure that repeats code",
      "A function",
      "A data type"
    ],
    correctAnswer: 1,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 287,
    question: "What is an array?",
    options: [
      "A single value",
      "A collection of elements",
      "A function",
      "A loop"
    ],
    correctAnswer: 1,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 288,
    question: "What is a conditional statement?",
    options: [
      "A loop",
      "A statement that executes code based on conditions",
      "A variable",
      "A function"
    ],
    correctAnswer: 1,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 289,
    question: "What does IDE stand for?",
    options: [
      "Integrated Development Environment",
      "Internet Development Environment",
      "Interactive Development Environment",
      "Internal Development Environment"
    ],
    correctAnswer: 0,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 290,
    question: "What is version control?",
    options: [
      "Controlling program versions",
      "A system for tracking changes in code",
      "A type of loop",
      "A programming language"
    ],
    correctAnswer: 1,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 291,
    question: "What is a database?",
    options: [
      "A programming language",
      "A structured collection of data",
      "A type of function",
      "A web browser"
    ],
    correctAnswer: 1,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 292,
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "High Tech Transfer Protocol",
      "HyperText Transport Protocol",
      "High Transfer Text Protocol"
    ],
    correctAnswer: 0,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 293,
    question: "What is a compiler?",
    options: [
      "A text editor",
      "A program that translates code to machine language",
      "A web browser",
      "A database"
    ],
    correctAnswer: 1,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 294,
    question: "What is the difference between frontend and backend?",
    options: [
      "No difference",
      "Frontend is user interface, backend is server-side logic",
      "Backend is user interface, frontend is server-side logic",
      "Frontend is faster"
    ],
    correctAnswer: 1,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 295,
    question: "What is a framework?",
    options: [
      "A type of variable",
      "A pre-written code structure for building applications",
      "A programming language",
      "A database"
    ],
    correctAnswer: 1,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 296,
    question: "What is a library in programming?",
    options: [
      "A building with books",
      "A collection of pre-written code",
      "A type of loop",
      "A variable"
    ],
    correctAnswer: 1,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 297,
    question: "What is syntax in programming?",
    options: [
      "The meaning of code",
      "The rules for writing code",
      "The speed of code",
      "The size of code"
    ],
    correctAnswer: 1,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 298,
    question: "What is a bug in programming?",
    options: [
      "An insect",
      "An error or flaw in code",
      "A feature",
      "A variable"
    ],
    correctAnswer: 1,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 299,
    question: "What does URL stand for?",
    options: [
      "Uniform Resource Locator",
      "Universal Resource Locator",
      "Uniform Resource Link",
      "Universal Resource Link"
    ],
    correctAnswer: 0,
    category: "general",
    difficulty: "easy"
  },
  {
    id: 300,
    question: "What is open source software?",
    options: [
      "Expensive software",
      "Software with publicly available source code",
      "Closed software",
      "Commercial software"
    ],
    correctAnswer: 1,
    category: "general",
    difficulty: "easy"
  }
];

export const getQuestionsByCategory = (category: string, difficulty: string): Question[] => {
  return questions.filter(q => 
    (category === 'all' || q.category === category) && 
    (difficulty === 'all' || q.difficulty === difficulty)
  );
};

export const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'react', label: 'React' },
  { value: 'css', label: 'CSS' },
  { value: 'html', label: 'HTML' },
  { value: 'general', label: 'General Programming' }
];

export const difficulties = [
  { value: 'all', label: 'All Difficulties' },
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' }
];