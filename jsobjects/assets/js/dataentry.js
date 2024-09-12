var btnSubmit = document.querySelector("#btnSubmit");

function getSelectorValue(name) {
    let inputSelector = document.querySelector(`input[name=${name}]`);
    let v = inputSelector.value.trim();
    inputSelector.value = "";
    return v;
}

btnSubmit.addEventListener('click', function () {
    let firstname = getSelectorValue('firstname');
    let lastname = getSelectorValue('lastname');
    let dob = getSelectorValue('dob');
    let newData = { 'fname': firstname, 'lname': lastname, 'dateOfBirth': dob };
    myData.push(newData);
    updateTable();
});