// //for loop
// //for(initialize; condition; inc/dec)
// // for(var i = 1; i <=4; i++ ){
// //     console.log(i,' I am in class');
// //     //for code block
// // }


// //arrays
// // var arrayName = [element1,element2]
// var students = ['Naqi', 'Bilal','Faiza','Wajid','maryam'];
// var i = students.length;
// // console.log(students.length);

// var numbers = [18, 22, 13];
// numbers.push(24)
// // acces values
// // var st2 = students[1];
// // console.log(students[1])
// // console.log(st2)

// // unshift(start) and push(end)  insert item 
// students.push('abeer')
// students.push('areeba')
// students.push('habiba')
// students.unshift('faiza')
// console.log(students)
// //shift pop 
// students.pop();
// students.shift();
// console.log(students)
// //slice
// // let fruits = ['cherry', 'banana','mango','apple', 'orange'];
// let cities = ['karachi', 'hyderabad','lahore','muree','isl', 'newyork','new jersey'];
// // console.log(cities)
// var PakistanCities = cities.slice(0,5);
// // console.log("PakistanCities", PakistanCities)
// var abroadCities = cities.slice(5,7)
// // console.log("abroadCities", abroadCities)

// //sort, reverse
//  let fruits = ['cherry', 'banana','mango','apple', 'orange'];
// //  console.log(fruits.sort());
// // console.log(fruits.reverse());

// let numb = [12, 33, 3, 111, 11,23,29,38];
// // console.log(numb.sort());

// //simple function , arrow functions
// let a =10;
// function sum(){
//     let a = 'faiza';
//     console.log('i am in function')
//     console.log(8+9)
//     // code

// }

// sum();
// //default
// function add(num1, num2 , num3=0){
//     console.log(num1+num2+num3);
// }
// add(2,4,3);

// function addition(a,b){
// // let result = a + b;
// return a+b;
// }

// var result = addition(4,5);
// console.log(result)

//reduce filter map find

// for(let i = 0; i < num.length; i++){
//     console.log(num[i])
// }

// num.map((item, index)=> {
// console.log(`${item} is at ${index}`)
// });

///eq  way

// num.map(function(item, ind){
//     console.log(`${item} is at ${ind}`)

// });
var num = [21, 4, 66, 8, 10, 3,7]
var sortedArr = num.sort((a,b)=> b - a);
console.log("sortedArr", sortedArr)

var reduced = num.reduce((a,b)=> a*b);
console.log("reduced", reduced)

var filterArr = num.filter((item)=> item > 5)

var f = num.find((item) => item > 6);
console.log("f", f)

const newArr = num.map((item)=>{
   return (
       ++item
   )
} )
console.log(filterArr)




