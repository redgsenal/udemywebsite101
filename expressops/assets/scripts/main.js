const txtOps = document.querySelector("#txtOps");
const btnEval = document.querySelector("#btnEval");
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