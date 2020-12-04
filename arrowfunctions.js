/// () => { }
const sum = () => console.log(8+9)


sum();

////////////////////////////
const add = (num1, num2 , num3=0) => console.log(num1+num2+num3);
add(2,4,3);

/////////////////////////
const addition = (a,b) =>  a+b; 
let result = addition(3,4);
////////////////////////
var prettifier = name => console.log(`My name is ${name}`);
prettifier('Faiza');
