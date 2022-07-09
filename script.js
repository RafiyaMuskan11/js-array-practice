//  array is a single variable that is used to store different elements
// array is object

// we can write array in two ways
//  method1: var arr = [ ]; 
// method2: var arr = new Array(); 


// method 1
var arrname=["rafiya", "muskan", "nushrat","jahan"];
console.log(arrname);

// method 2 
var newnames=new Array("umaymah","aslam");
console.log(newnames);

// to find the lenght of an array.
console.log(arrname.length)

// sorting an array
console.log(arrname.sort());

// printing an element.
console.log(arrname[1]);


// push - command is used to add elements at the last of an array.
newnames.push("mahi");
console.log(newnames);

// pop - this command is used to delete elements from the last of an array.

var fruits=["apple","orange","banana","grapes"];
console.log(fruits);
fruits.pop();
console.log(fruits);

// shift- is used to remove or delete elements from the begining of an array.
fruits.shift();

// unshift - is used to add elements in the beginning of an array
fruits.unshift("Lemon","Pineapple");

// slice - This method returns selected elements in an array, as a new array without changing the old array.
var subjects=["java","htlm","css","javascript","c++"];
var webdev = subjects.slice(1, 4);
console.log(webdev);

// splice
const fruit = ["Banana", "Orange", "Apple", "Mango"];

fruit.splice(2, 0, "Lemon", "Kiwi");
console.log(fruit);





// uppercase and lowercase
var myname = "RAFIYAmuskan";
let caps= myname.toUpperCase();
let small=myname.toLowerCase();

console.log(caps);
console.log(small);


// to find the index of an element
var strng="RafiyaMuskan";
console.log(strng);
var position=strng.indexOf('M');
console.log(position);

// function

function addTwoNumber(a,b){
    var sum=0;
    console.log(a,b,sum)
}
addTwoNumber(5,10);
addTwoNumber(15,10);

// function expression 

const getRectArea = function(width, height) {
    return width * height;
  };
  
  console.log(getRectArea(3, 4));






