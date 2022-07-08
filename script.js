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

// to find the lenght of the array.
console.log(arrname.length)

// sorting the array
console.log(arrname.sort());

// printing an element.
console.log(arrname[1]);


// adding new elements to the array.
// push command is used to add elements.
newnames.push("mahi");
console.log(newnames);


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