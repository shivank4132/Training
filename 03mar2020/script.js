/* console.log('Q.1 Create a hierarchy of person, employee and developers. ')

function person(name){
    this.name = name;
}



function employee(name,id){
    person.call(this,name);
    this.id = id;
}

function developers(name,id,competency){
    employee.call(this,name,id) ;
    this.competency = competency;
}

var obj= new developers('Shivank',4132,'Angular');
console.log(obj);
*/





console.log('Q2. Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.')

var arr=[1,2,3,4,5];
var i=0;
(function loop(){
    console.log(arr[i]);
    if(++i<arr.length){
        setTimeout(loop,3000);
    }
})
();
 




 /* 
console.log('Q3. Explain difference between Bind and Call(example)');

console.log("'--Call attaches this into function and executes the function immediately'");
  
var person = { 
    name: "Jack Sparrow",
    msg: function(word){
        console.log(this.name + " says hello " +word);
    }
}

person.msg("world");

person.msg.call({name:"John Mayor"},"world");

console.log("--'Bind attaches this into function and it needs to be invoked separately.'");

var showBind= person.msg.bind({name:"Hiley"});
showBind("world");
 */




/* 
 
Q4. Explain 3 properties of argument object.


 Arguments is an Array-like object accessible inside 
 functions that contains the values of the arguments passed to that function.

 A.Property of argument object : 

 1. argument.callee
 
 Callee is a property of the arguments object. It can be used to refer to the currently executing function inside the function body of that function. This is useful when the name of the function is unknown, such as within a function expression with no name (also called "anonymous functions").
 
 2 .argument.length
 
 The arguments.length property provides the number of arguments actually passed to a function. This can be more or less than the defined parameter's count.
 
 3. arguments[@@iterator]()
 
 The initial value of the @@iterator property is the same function object as the initial value of the Array.prototype.values property.
  */





//Q5. Create a function which returns number of invocations and number of instances of a function.




/* 
console.log('Q6. Create a counter using closures.')

var counter= (function(){
    var count = 1;
    return function() {
        return count++;
    } 
}());

for(var i=0;i<5;i++){
    console.log(counter());
}
 */






/*  
Q7. Explain 5 array methods with example.
 

1. Array.sort(); - This method is use to sort array in assending order.

 Example- 

  var demoArray = [42,52,46,12,84,35,75];
 console.log(demoArray.sort());
 
 
 
  Sorted Array - [ 12, 35, 42, 46, 52, 75, 84 ]


2. Array.shift(); - This method will pop one value from the begning of the array.

 demoArray.shift();
 console.log(demoArray)
 
 [ 52, 46, 12, 84, 35, 75 ]

 3. Array.unshift(); - This method will push one value at the begning of the array.
 
 demoArray.unshift(15)
 console.log(demoArray)
 
 After Unshifting  [ 15, 42, 52, 46, 12, 84, 35, 75 ]

 4. Array.push(); - This method will push one element at the end of the array.

 demoArray.push(24);
 console.log(demoArray);

  After Pushing 24  [ 42, 52, 46, 12, 84, 35, 75, 24 ]


 5. Array.pop(); - This method will pop one element from the end of the array.

 demoArray.pop();
 console.log(demoArray);

  After Pop  [ 42, 52, 46, 12, 84, 35, 75]



 */