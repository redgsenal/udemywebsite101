const counter = document.querySelector("#counter");
const btnPlus = document.querySelector("#plus");
const btnMinus = document.querySelector("#minus");
const btnReset = document.querySelector("#reset");

function updateValue(v) {
    if (v == 0) {
        counter.value = 0;
        return;
    }
    counter.value = parseInt(counter.value) + v;
}

btnPlus.addEventListener('click', (e) => {
    e.preventDefault();
    updateValue(+1);
});

btnMinus.addEventListener('click', (e) => {
    e.preventDefault();
    updateValue(-1);
});

btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    updateValue(0);
});
