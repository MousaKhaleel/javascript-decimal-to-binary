
function decimalToBinary(i){
    let reminder=0;
    let results='';
    while (i>0){
        reminder=i%2;
        results=reminder+results;
        i=parseInt(i/2);
    }
    return results;
}

console.log(decimalToBinary(20));







// *************************************************************************************

// function maxNmin(a,b){
//     if(a==b)
//     return "equal";
// else if(a>b)
// return "max is "+a+"and min is "+b;
// else if(b>a)
// return "max is "+b+" and min is "+a;
// else  "error";
// }

// console.log(maxNmin(2,3));

// *************************************************************************************

// function fuzzbuzz(a){
//     arr=[];
//     arrAfter=[];
//     for(let i=0;i!=a;i++){
//         arr.push(i);
//     }
//     for(let i=0;i<=arr.length;i++){
//         if(i%15==0)
//             arrAfter[i]='fuzzbuzz';
//         else if(i%5==0)
//             arrAfter[i]='buzz';
//         else if(i%3==0)
//             arrAfter[i]='fuzz';
//         else
//             arrAfter[i]=i;
// }

// return arrAfter;
// }

// console.log(fuzzbuzz(12));


// function fuzzbuzz2(a){
//     arr=[];
//     arrAfter=[];
//     for(let i=0;i!=a;i++){
//         arr[i]=i+1;
//     }
//     for(let i=0;i<=arr.length;i++){
//         if(i%15==0)
//             arrAfter[i]='fuzzbuzz';
//         else if(i%5==0)
//             arrAfter[i]='buzz';
//         else if(i%3==0)
//             arrAfter[i]='fuzz';
//         else
//             arrAfter[i]=i;
// }

// return arrAfter;
// }

// console.log(fuzzbuzz2(12));

// *************************************************************************************

// let power=(i)=>{
//     console.log(i=i**3)
// }

// power(2)

// *************************************************************************************

// const x= (i)=>{
//     console.log(i)
// }

// x(10)