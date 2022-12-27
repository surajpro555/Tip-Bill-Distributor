const billinput=document.getElementById('billinput')
const tipinput=document.getElementById('tipinput')
const increment=document.getElementById('increment')
const decrement=document.getElementById('decrement')
const show=document.getElementById('show')
const total=document.getElementById('total')
let count=Number(show.innerHTML)
increment.onclick=()=>{
    count++;
    show.innerHTML=count;
    calbill();
}
decrement.onclick=()=>{
    if(count>1)
    count--;
    show.innerHTML=count;
    calbill()
}
const calbill=()=>{
    let result=Number(billinput.value)*(1+Number(tipinput.value)*0.01);
    total.innerHTML=`Rs ${(result/count).toFixed(2)}`
}
