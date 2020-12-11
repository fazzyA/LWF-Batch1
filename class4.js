//Dom
//spread op
// objects
//destructing

//firstChild lastChild nextSibling previousSibling
function show(){
   let div = document.getElementById('parent')
console.log("div", div[0].firstChild.nextSibling.nextSibling)
let firstPara = div.firstChild
let secChild = div.firstChild.nextSibling
let thirdChild = div.lastChild

// console.log(firstPara.innerHTML)
// firstPara.innerHTML = 'New dynamic text'
// firstPara.setAttribute('class', 'heading')
// firstPara.setAttribute('name', 'firstname')
// console.log(firstPara.getAttribute('id'))
let div = document.getElementById('parent')

let newPara = document.createElement('p');
let textNode = document.createTextNode('fourth para')

newPara.appendChild(textNode)
div.appendChild(newPara)
}
function task(){
    let input = document.getElementById('task');
    let ul = document.getElementById('ul')
    let value = input.value;
    let li = document.createElement('li')
    let text = document.createTextNode(value)
    li.appendChild(text)
    ul.appendChild(li)
}

/////spread op ...
const sum = (a,b,c,d)=> a+b+c+d
let arr = [1,2,6,7]
let arr2 = [9,5]
let arr3 = [2,3]

let res = sum(...arr2,...arr3)
console.log("res", res)

// arr2 = arr3;
// arr2[0] = 55;
arr2 = [...arr3]
arr2[0] = 55;
console.log(arr2)

////////objects key:value
var employee = {
    name: 'bilal',
    age: '25',
    eNum: 'E189',

 }

// console.log(employee.name)
// console.log(employee['name'])

function Employee(name , age, eNum, salary){
    this.name = name;
    this.age = age;
    this.eNum = eNum;
    this.salary = salary;
    this.bonus = function(){
        return this.salary * 0.25
    }

} //{name:'Bilal, age: 25, eNum:'e1'}
let emp1 = new Employee('Bilal', 25, 'e1',1000)
let emp2 = new Employee('H', 25, 'e2',1000)
let emp3 = new Employee('M', 25, 'e3',2000)
let emp4 = new Employee('A', 25, 'e4',1000)
console.log(emp2.bonus())

///destructuring converting element of an array in a variable
let arr4 = [1,2]
let [a,b,c,d] = [3,5, ...arr4];
console.log(c)

let [x,y ,...z] = [1,2,3,4,5,6,7,8]
console.log(z)
let obj = {a1:10,b1:20,c1:30}
({a1,b1,c1}=obj)
({ name , age, eNum} = employee);

let str = ['red','green','yellow']
let [c1, c2, c3]= str
