// var book = {
//     title: 'Harry potter',
//     author : 'JK Rowling',
//     publicationDate: new Date(),
//     genre: 'fiction'

// }
// console.log(book['title'])
// let arr = [12,13,14]
// let [a,b,c] = arr
// ///method 1 destructing

//  let {title, author, publicationDate, genre} = book
//  console.log(title)
//  console.log(author)
//  console.log(publicationDate)
//  console.log(genre)
 
//  // mehtod 2 for in loop
//  for(let item in book) {
//      console.log(book[item])
//  }

// let fname = ['faiza', 'hira', 'daniyal']
// let lastName = ['Aziz','Khan','Nagori']
// let fullname = [];
// if(fname.length == lastName.length){
//    for(let i =0 ;i<fname.length; i++){
//  fullname.push(`${fname[i]} ${lastName[i]}`)
// } 
// }
// console.log(fullname)
// let arr = [2,4,6,8]
// let result = []
// function double(arr){

// result =  arr.map((item)=> item*2)
// console.log(result)
// }
// double(arr);

let num = [5,6,7,8]
let num2 = [3,4]
// num = num.concat(num2)
// console.log(num)
num = [...num,...num2]
console.log(num)
let a = [...num];
console.log("a", a)
/// spread destructuring map, filter, objects
