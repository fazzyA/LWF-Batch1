// split vs join
var str = 'faiza'
console.log(str.split(''))

console.log([1,2,3].join(' '))
//date time
//calculate time difference from your birth day till now
//calculate time diff same day prev year
var now = new Date();
var prev = new Date();
prev.setFullYear(2019);
var t = (now.getTime() - prev.getTime())/(1000*60*60*24);
console.log(t)