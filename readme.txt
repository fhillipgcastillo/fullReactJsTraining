//modern javascript
function code(name){
 //...
}

{
 /// this is a block scope
 ///var ...
}

// var inside function can't be access outside that scope
// but var inside blobk scope can be use outside, as fors or ifs
// let is only for that scope
const => properties can be change but the cosnt itself cannot

to use a complete inmutable object use object.freeze() or inmutable.js
const are use for imports, functions, class,

for function we can declare as:
#1 const square = (a) => { return a* a};
#2 const square = a => a*a;

when a object with the same value as the variables we can do this:
const X = {
  PI,
  sum,
  square
}
instead of const X = {
  PI:PI,
  ...
}

instead of: const square = X.square; if they have the same name
use: const { square } = X;


we can use default value in functions
function X({base=0, bumber})

X({bumber:101})

rest paramenters like
const toDecimal = (base, ...numbers) => {
  .... //numners => [101, 111, 1010]
}

toDecimal(2, 101, 111, 1010)
console.log([0, ...numbers]) => [0, 101, 111, 1010]

with babel we can use import ... from


======================================

project = 3 Nodes:
* Web Server
* React components (front-end and back-end)
* ( API Server)

====
to init a project
npm init

express => for the api
mongodb => mongodb driver
react, react-dom => for react component (front-end and back-end)
babel => for ES
webpack => for config and making browser recognize the code and
nodemon => to auto-restart after changing dependencies
