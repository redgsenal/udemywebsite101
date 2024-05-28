let body = document.querySelector('body');
let redBtn = document.querySelector('#redBtn');
let yellowBtn = document.querySelector('#yellowBtn');
let blueBtn = document.querySelector('#blueBtn');
let greenBtn = document.querySelector('#greenBtn');
let resetBtn = document.querySelector('#resetBtn');
let resetColor = body.style.background;

resetBtn.setAttribute('data-color', resetColor);

redBtn.addEventListener('click', function (e) {
    e.preventDefault();
    setBackGroundColor(this);
});

yellowBtn.addEventListener('click', function (e) {
    e.preventDefault();
    setBackGroundColor(this);
});

blueBtn.addEventListener('click', function (e) {
    e.preventDefault();
    setBackGroundColor(this);
});

greenBtn.addEventListener('click', function (e) {
    e.preventDefault();
    setBackGroundColor(this);
});

resetBtn.addEventListener('click', function (e) {
    e.preventDefault();
    setBackGroundColor(this);
});

function setBackGroundColor(btn) {
    redBtn.classList.remove('selected');
    yellowBtn.classList.remove('selected');
    blueBtn.classList.remove('selected');
    greenBtn.classList.remove('selected');
    resetBtn.classList.remove('selected');
    btn.classList.add('selected');
    let c = btn.getAttribute('data-color');
    body.style.background = c;

}