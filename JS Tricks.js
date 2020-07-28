//Multiple Ternory operator
const age = "as";

age > 30 ? 
    age > 50 ? console.log("Your an old man :(") : console.log("Your Sexy!!")
    : console.log("Your a Teenage Ohoo");

//Convert Number to string
// const num1 = 20+""
// console.log(typeof(num1));

//Convert String to number
const str1 = "143";
console.log(typeof(+str1));

//Create empty array with default values
const temp_arr = Array(5).fill('');
console.log(temp_arr);

// Unique values from array
const arr1 = ["Satya","Seetha","Vijay","Ravi","Vijay"];

const unique_arr = Array.from(new Set(arr1));
console.log(unique_arr);


//Set Dynamic key in object
const dynamic = "salary";
const employee = {
    name : "Vijay",
    designation : "Sr. Web Developer",
    [dynamic] : 40000
}
console.log(employee);

//Convert array to object
const odd_nums = [1,3,5,7];
const odd_obj = {...odd_nums};
console.log(odd_obj);
console.log({...odd_nums});

//Convert object to array
const employee = {
    name : "Vijay",
    designation : "Sr. Web Developer",
    salary : 40000
}
const emp_arr_keys = Object.keys(employee); //For getting keys
const emp_arr_values = Object.values(employee); //For getting values
console.log(emp_arr_keys);
console.log(emp_arr_values);

const num2 = [1,2,3,4,5,1];
num2.length = 4; //Set length so that u can get starting values upto length

console.log(num2.slice(-3));//Get last values from array

//Check Performance time taken to run script in millisecs
let startAt = performance.now();

for (let index = 0; index < 20000; index++) {
    console.log(index);
}

let endAt = performance.now();

console.log(`${endAt - startAt} time taken for execute`);
//https://youtu.be/mNJ06S60B9k

//Let,const examples (25/07/2019)
let x = '';

if(!x){
  x = "Set value";
}else{
  x = '';
}

console.log(x);

{
  let y = '';
  y = y ? '' : "set value";
  console.log(y);
}

{
  let x = '';
  let y = '';
  let z = 'Z';

  x = x ? x : y ? y : z ? z : 'Empty';
  console.log(`Output ${x}`)

  y = y || z || "VJ";
  console.log("New "+y);
}

const character = "Beautiful";
//console.log("Girl is "+character+ "\n is very rare "+character)
console.log(`Girl is ${character}`);

const heros = ['Super Girl','Hulk'];
heros.push("Annapoorna");
console.log(JSON.stringify(heros))

//Copying object cases (27/07/2019)
const user = {
  name: 'VJ',
  location: {
    home: 'Rajahmundry',
    role: 'Web Developer'
  }
};
const copy = JSON.parse(JSON.stringify(user));
copy.location.role = 'Full Stack Developer';

console.log('original: ', user);
console.log('Using JSON Method:', copy);

const copiedObject = Object.assign({}, user);
copiedObject.location.role = 'Full Stack Developer';
console.log('original: ', user);
console.log('Using Object Method:', copiedObject);

//https://levelup.gitconnected.com/tricky-javascript-code-snippets-asked-in-the-interview-8ed9b868a4a5

//https://medium.com/javascript-in-plain-english/why-you-should-not-use-array-to-remove-all-the-elements-of-array-42ad2951d47e#5efd