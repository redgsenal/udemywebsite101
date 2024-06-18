function calculateAge(bdate) {
    var dob = new Date(bdate);
    var ageDifMs = Date.now() - dob.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

function fullname(fname, lname) {
    return fname + " " + lname;
}


function generateColumn(data) {
    const col = document.createElement("td");
    col.innerText = data;
    return col;
}

function generateRow(data) {
    const trow = document.createElement("tr");
    trow.appendChild(generateColumn(data.fname));
    trow.appendChild(generateColumn(data.lname));
    trow.appendChild(generateColumn(fullname(data.fname, data.lname)));
    trow.appendChild(generateColumn(data.dateOfBirth));
    trow.appendChild(generateColumn(calculateAge(data.dateOfBirth)));
    return trow
}

const myData = [{
    fname: "John",
    lname: "Doe",
    dateOfBirth: "1980-01-01",
},
{
    fname: "Sam",
    lname: "Lee",
    dateOfBirth: "1990-11-01",
},
{
    fname: "Mike",
    lname: "Lake",
    dateOfBirth: "2000-09-11",
},
{
    fname: "Lars",
    lname: "Tiago",
    dateOfBirth: "1992-03-15",
},
{
    fname: "Sally",
    lname: "Fitz",
    dateOfBirth: "1988-05-12",
},
{
    fname: "Dom",
    lname: "Nicks",
    dateOfBirth: "1987-12-19",
}];


/* console.log(myData);
console.log(myData[0].fullname());
console.log(myData[0].age());
console.log(myData[1].fullname());
console.log(myData[1].age());
console.log(myData[2].fullname());
console.log(myData[2].age()); */

const tble = document.querySelector("#tabledata");
const tbleBody = document.createElement("tbody");
myData.forEach((item, idx) => {
    console.log(idx, item);
    tbleBody.appendChild(generateRow(item));
});
tble.appendChild(tbleBody);
