const arr1 = ["akshay", "aditya", "jain"]


const arr2 = ["archi", "kamna", "tanya"]

const arr3 = ['awi',"ak","am"]

// console.log(arr1.concat(arr2));

// console.log(...arr1,...arr2,...arr3);


const bigarr = [1, 2, 3, [4, 5, 6, [10, 11, 12]]]


// console.log(bigarr.flat(Infinity));


console.log(Array.isArray("akshay"));

console.log(Array.from("akshay"));
console.log(Array.from({ name: "akshay" }));

let a = 10;
let b = 100
let c =2000
console.log(Array.of(a,b,c));