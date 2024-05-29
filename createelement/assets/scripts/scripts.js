console.log("hello");
let txtbox = document.querySelector("#txtbox");
let btn = document.querySelector("#btn");

btn.addEventListener('click', function () {
    const newItemText = txtbox.value;
    const newItemElement = document.createElement("li");
    const datalist = document.querySelector("#datalist");
    newItemElement.textContent = newItemText;
    datalist.appendChild(newItemElement);
    txtbox.value = "";
});
