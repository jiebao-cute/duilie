const divScreen = document.querySelector('#screen')
const btnCreateNumber = document.querySelector('#createNumber')
const btnCallNumber = document.querySelector('#callNumber') 
const spanNewNumber = document.querySelector('#newNumber')
const spanQueue = document.querySelector('#queue');
 
let n = 0;
let queue = [];
btnCreateNumber.onclick = ()=>{
    n= n+1;
    //queue.push(n);
    queue.push.call(queue,n);
    spanNewNumber.innerText = n;
    spanQueue.innerText = JSON.stringify(queue);//可以把JS里面的字符串变得像数组

}
btnCallNumber.onclick = ()=>{
    //const m =queue.shift 没有call的用法直观
    const m = queue.shift.call(queue);
    if (m === undefined){
     return
    }
    divScreen.innerText = `请${m}号就餐`
    spanQueue.innerText = JSON.stringify(queue);
}

