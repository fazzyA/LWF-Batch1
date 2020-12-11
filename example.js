let fruit = 'apple'
{
    let fruit  = 'mango'
    {
        let fruit = 'cherry'
        console.log(fruit)
    }
    console.log(fruit) //mango apple
}

///promise
let a = false
var promise = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('yahoo'), 2000)
    //a ? resolve('yahoo'):reject('ohooo');
}) ;
// promise.then(()=>console.log('do whatever u want after resolve')).catch(e=>console.log(e))
async function asyncCall() {
    const result = await promise;
    console.log('calling');
    console.log(result);
    // expected output: 'resolved'
}
asyncCall();
////////
