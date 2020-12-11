// JS / ES6
//variable
//template literals
//ternary
//arrow functions
//arrays methods map filter
//objects
//spread op
//destructuring
//promises

// let , const, var
// let num = 10; 
// const num1 = 20;
// var num2 = 30;

// {
//     let fruit = 'peach';
//     console.log(fruit) 
// }
// console.log(fruit) //ref error

var name = 'faiza'
var middleName = 'Aziz'
var lastName = 'Khan'

//  alert(name + ' ' + middleName + ' '+ lastName)
// alert(`My name is ${name} ${middleName} ${lastName}`)

// let a = 13;
// if(a==10){
//     console.log('your num is 10')
// } else{
//     console.log('your num is not 10')
// }
// condition ? true : false
// let msg = a > 0 ? 'your num is positive': 'your num is negative'
// console.log(msg)

////functions
// const sum = (x,y,z) => {
//     console.log(x+y+z)
// }
// sum(2,3,6)

// const add = (a,b,c) =>{
//     return a+b+c
// }
// let result = add(4,6,9);
// console.log("result", result)

//arrays
var students = ['Ali','Umair','Bilal','maryam']
var num = [2,4,6,8,10]

// for(let i=0; i<students.length;i++){
//     console.log(students[i])
// }
///map
// students.map(function(item) {
//     console.log(item)
// })
students.map((item)=>console.log(item))
let odd = num.map(
    (item)=>{
        return ++item
        
})
// let double = num.map((item)=> item*2)
// // console.log(double)
// var numbers = [23,45,67,2,5,89]
// let greaterNum = numbers.filter((item)=> item==67)
// // console.log("greaterNum", greaterNum)

var employee = {
    name: 'Faiza',
    age: 36,
    empNum: 'EM201'
}
var {name, age, empNum} = employee
console.log(age)
// console.log(employee.name)
/// ...
const sum = (a,b,c,d) => a+b+c+d;
let arr = [7,89,6,9]
// console.log(sum(...arr)) // sum(3,7,89)

// var arr1= [1,2]
// var arr2 =[3,4]
// var arr3 = [...arr1, ...arr2]//arr1.concat(arr2) //[1,2,3,4]
// // console.log("arr3", arr3)

// arr2 = [...arr1]
// console.log(arr2)
// arr2[0]=9
// let num4 = [2,4,5,6]
// var [a,b,c,d] = num4
// console.log(b)
//promise
let a = 10;
var myPromise = new Promise(
    (resolve,reject)=>{

        a ==10 ? resolve('yahooo'):reject('ohooo')

    }
)
myPromise
.then(
    (res)=>{
        console.log(res)
        console.log('Im in then method')

    }
)
.catch(
    (res)=> {
        console.log(res)
        console.log('Im in catch method')
    }
)