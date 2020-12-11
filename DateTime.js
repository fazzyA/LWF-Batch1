//date time
//calculate time difference from your birth day till now
//calculate time diff same day prev year
var days= ['sun','mon','tues','wed','thurs','fri','sat']
var now = new Date();
// now = now.toDateString()
let day = now.getDay();
let d = now.getDate();
let m = now.getMonth() + 1;
let y = now.getFullYear();
let h = now.getHours();
let min = now.getMinutes();
let s = now.getSeconds();
console.log(`${d}-${m}-${y} ${h}:${min}:${s} ${days[day]}`)

var current = new Date();
var BY = new Date('October 4, 1983');

var curTime = current.getTime();
var bTime = BY.getTime();
var diff = curTime - bTime;
diff = diff/(1000 * 60 * 60 * 24)
console.log("diff", diff)

current.setFullYear(2019)
// current.setMonth(10)
console.log(current.getDay());