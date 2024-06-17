const list = document.querySelector("#numbers");
console.log(list);

function isFizz(v) {
    return isMultipleOf3(v);
}

function isBuzz(v) {
    return isMultipleOf5(v);
}

function isEven(v) {
    return (isMultipleOfN(2, v));
}

function isMultipleOf3(v) {
    return (isMultipleOfN(3, v));
}

function isMultipleOf5(v) {
    return (isMultipleOfN(5, v));
}

function isMultipleOfN(n, v) {
    return (v % n == 0);
}

for (let x = 0; x <= 100; ++x) {
    let item = document.createElement("li");
    list.appendChild(item);
    let txt = x;
    let ptxt = document.createElement("p");
    if (isEven(x)) {
        txt = x + " is even";
    }

    console.log(txt);
    let txt2 = "and is a NOT multiple of 3";
    if (isMultipleOf3(x)) {
        txt2 = "and is a multiple of 3";
        console.log("multiple of 3", x);
    } else {
        console.log("NOT multiple of 3: ", x);
    }

    let fz = isFizz(x);
    let bz = isBuzz(x);
    let fzbz = (fz && !bz) ? "then its a Fizz" : "";
    fzbz = (bz && !fz) ? "then its a Buzz" : fzbz;
    fzbz = fz && bz ? "then its a FizzBuzz" : fzbz;

    txt = txt + " " + txt2 + " " + fzbz;
    ptxt.innerText = txt
    item.appendChild(ptxt);
}