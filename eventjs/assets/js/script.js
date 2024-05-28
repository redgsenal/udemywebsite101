let title = document.querySelector("#title");
let originalTitle = title.innerHTML;
let txtbox = document.querySelector("#txtbox");

let btn = document.querySelector("#btn");
let btnReset = document.querySelector("#btnReset");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

console.log('textbox:', txtbox);
btn.addEventListener('click', function () {
    clickBtn(txtbox.value);
});

function clickBtn(newTitle) {
    title.innerHTML = newTitle;
}

btn1.addEventListener('click', function () {
    clickBtn("Button 1 clicked");
});
btn2.addEventListener('click', function () {
    clickBtn("Button 2 clicked");
});
btn3.addEventListener('click', function () {
    clickBtn("Button 3 clicked");
});

btnReset.addEventListener('click', function () {
    clickBtn(originalTitle);
})
