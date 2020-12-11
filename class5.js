// fetch api
//promises
//test JS adv es6 MCQs
//setTimeout 
// (function() {
//      console.log(1); 
//     setTimeout(function(){console.log(2)}, 1000); 
//     setTimeout(function(){console.log(3)}, 0); 
//     console.log(4); //1 4 3 2
// })();
// setTimeout(()=>{console.log(new Date)}, 3000);
// setInterval(()=>{console.log(new Date)}, 1000)

let a = 5;
let promise = new Promise(
    (resolve, reject)=>{
a == 10 ? resolve('great') : reject('error occured')
});

promise
.then((res)=>{
    console.log(res)
    console.log('im in then')

})
.catch(
    (res)=>console.log(res))
//fetch
let posts=[];
fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>res.json())
.then(response=> {
   posts= response;
    console.log(posts)
    showData();

})
.catch((res)=>console.log(res))
function showData(){
   // console.log(posts)
let parent = document.getElementById('post')
    posts.map((item)=>{
    let div = document.createElement('div')
    let title = document.createTextNode(item.title)
    let body = document.createTextNode(item.body)
    div.appendChild(title)
   parent.appendChild(div)
    })



}