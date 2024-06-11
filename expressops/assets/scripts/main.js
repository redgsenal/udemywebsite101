const txtOps = document.querySelector("#txtOps");
const btnEval = document.querySelector("#btnEval");
const listings = document.querySelector("#listings");
const counter = document.querySelector("#counter");
const counterA = document.querySelector("#counterA");

console.log('txtOps ', txtOps);

btnEval.addEventListener('click', function (evnt) {
    evnt.preventDefault();
    const v = txtOps.value;
    if (v === '' || v.length == 0) {
        txtResults.value = '';
        return;
    }
    try {
        txtResults.value = eval(v);
    } catch (er) {
        console.info("expression is not valid...", v);
    }
});

let a = [1, 3, 5, 7, 10, 15, 80, 100];
console.log(a);
a.forEach((v, i) => {
    const item = document.createElement("li");
    const list = document.createTextNode(v);
    item.appendChild(list);
    listings.appendChild(item);
});

let sum = 0;
for (let i = 0; i < 11; i++) {
    console.log("i: ", i);
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
console.log("sum: ", sum);

let x = 0
while (x < 10) {
    const item = document.createElement("li");
    const list = document.createTextNode(x++);
    item.appendChild(list);
    counter.appendChild(item);
}


let y = 10;
do {
    const item = document.createElement("li");
    item.innerHTML = y--;
    counterA.appendChild(item);
} while (y > 0);
