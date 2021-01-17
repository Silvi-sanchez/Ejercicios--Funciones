
const haceCalor =(temperatura) => {
    if(temperatura > 21){
        return true;
    }else{
        return false;
    }
}


console.log(haceCalor(12));
console.log(haceCalor(22));
console.log(haceCalor(32));