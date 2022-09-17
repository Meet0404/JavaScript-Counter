
function Increment(){
   let number=Number(document.getElementById('num').innerHTML);
   number+=1;
   document.getElementById('num').innerHTML=number;
}

function Decrement(){
    let number=Number(document.getElementById('num').innerHTML);
    number-=1;
    document.getElementById('num').innerHTML=number;
}

function Neutral(){
    let number=0;
    document.getElementById('num').innerHTML=number;
}
