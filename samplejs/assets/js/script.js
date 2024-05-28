//console.log('hello there!');
document.write("<p>First line here</p>");
document.write("<h1>Sample JS</h1>");
document.write("<p style='background-color: red;'>Lorem ipsum from JS</p>");
document.write("<em>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, delectus.</em>");

let hello = document.getElementById("hello");
hello.innerHTML = "hi!!!!";
console.log("hello:", hello);
console.log(typeof hello);

let f = document.querySelector(".foo");
f.innerHTML = "hello there!!!";
f.style.color="pink";
console.log("f: ", f);

let f2 = document.querySelector("#bar3");
f2.innerHTML = "this is idbar3";
f2.style.background="red";
console.log("f2: ", f2);

let $a = "hello";
let _a = "hello there!";
let b = 100;
let c = 'this is it'
let d = 3.1415927;

console.log("$a:", $a);
console.log("_a:", _a);
console.log("b:", b);
console.log("c:", c);
console.log("d:", d);

console.log(typeof d);
d = "3.1415927 is constant PI";

console.log("d:", d);
console.log(typeof d);

let g = true;
let h = !g;

console.log("g:", g);
console.log(typeof g);

console.log("h:", h);
console.log(typeof h);

