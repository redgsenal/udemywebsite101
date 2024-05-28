const body = document.querySelector('body');
const btns = document.querySelectorAll('button');
const resetColor = body.style.background;

resetBtn.setAttribute('data-color', resetColor);

btns.forEach(btn => btn.addEventListener('click', function (e) {
    e.preventDefault();
    setBackGroundColor(this);
}));

function setBackGroundColor(btn) {
    let c = btn.getAttribute('data-color');
    body.style.background = c;
}