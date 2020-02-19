/*  function si(a,r,t){
    let interest=(a*r*t)/100;

    return interest;
}

let a=prompt("Enter amount :");
let r=prompt("Enter rate of interest :");
let t=prompt("Enter time period");

let result=si(a,r,t);
alert(result);  */



 function area(r){
    let circlearea= 3.14*r*r;
    
    return circlearea;
}

let  r = prompt("Enter the radius of circle : ");
 let result=area(r);
 alert(result);
 
/* 
 let obj={
     name:"abc",
     age:21,
     city:"noida"
 }
 console.log(obj)

 let obj2={
     ...obj
 
    }
console.log(obj2)
 */

/* function reverse(n){
    var r_num=0,rem;
    while(n>0){
        rem=n%10;
        r_num=r_num*10+rem;
        n=Math.floor(n/10);
    }
    document.write("The reversed no. is "+r_num);
}
var num=prompt("Enter any number : ");
 let result=reverse(num); */