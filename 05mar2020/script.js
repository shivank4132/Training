 console.log("Q1");

let oldArray = [3,62,234,7,23,74,23,76,92];

let newArray = oldArray.filter(item=>{if(item>70) return item;})
console.log(newArray); 


/* 
console.log("Q2. ");

let arr = document.getElementsByTagName("li");

var data=[];
for(var i=0;i<arr.length;i++){
    data.push(arr[i].innerText);
}

console.log(data);




let filteredValue = data.filter(item=>{return item=="Flexbox Video"});
console.log(filteredValue);



let timeString = document.getElementsByTagName("li");
let timeData=[];
for(i of timeString){
    timeData.push(i.getAttribute('data-time'));
}
console.log(timeData);



let secondsArray= [];
for(i of timeString){
    let dataItem = i.getAttribute('data-time');
    let second = dataItem.split(':');
    secondsArray.push(second[1]);
}
console.log(secondsArray);




let arrTotal= secondsArray.map((ele)=>{return parseInt(ele);});

let total=arrTotal.reduce((sum,cur)=>{return sum+cur});
console.log(total);
 */


 
/* 
console.log("Q3. ")
const song = {

name: 'Dying to live',

artist: 'Tupac',

featuring: 'Biggie Smalls'

};


let markup = `
<div class="song">
<p>
${song.name} - ${song.artist}
(Featuring ${song.featuring})
</p>
</div>
`

console.log(markup);
 */


 /* 
console.log("Q4.  ");

const user = {

firstName: 'Sahil',

lastName: 'Dua',

Address: {

Line1: 'address line 1',

Line2: 'address line 2',

State: 'Delhi',

Pin: 110085,

Country: 'India',

City: 'New Delhi',

},

phoneNo: 9999999999

}

let {Address:{Line1,Line2,State,Pin,Country,City}} = user;

console.log(Line1,Line2,State,Pin,Country,City);  */