const tableItem = document.querySelector("table");
const txtBoxFirstName = document.querySelector("#fname");
const txtBoxLastName = document.querySelector("#lname");
const btn = document.querySelector("#add");
const tbodyItem = tableItem.querySelector("tbody");

console.log(btn);
console.log(txtBoxFirstName);
console.log(txtBoxLastName);

function isTextValueValid(v) {
    return v.trim().length > 0;
}

function newTableCol(v) {
    const col = document.createElement("td");
    col.innerHTML = v;
    return col;
}

btn.addEventListener('click', function (e) {
    e.preventDefault();
    const fName = txtBoxFirstName.value;
    const lName = txtBoxLastName.value;
    if (isTextValueValid(fName) && isTextValueValid(lName)) {
        const newRow = document.createElement("tr");
        const newFNameCol = newTableCol(fName);
        const newLNameCol = newTableCol(lName);
        newRow.appendChild(newFNameCol);
        newRow.appendChild(newLNameCol);
        tbodyItem.appendChild(newRow);
    } else {
        console.log("invalid names");
    }
    txtBoxFirstName.value = "";
    txtBoxLastName.value = "";
});
