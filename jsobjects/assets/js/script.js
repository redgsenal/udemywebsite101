function calculateAge(bdate) {
    var dob = new Date(bdate);
    var ageDifMs = Date.now() - dob.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const myData = [{
    fname: "John",
    lname: "Doe",
    dateOfBirth: "1980-01-01",
    fullname() { return this.fname + " " + this.lname; },
    age() { return calculateAge(this.dateOfBirth); }
},
{
    fname: "Sam",
    lname: "Lee",
    dateOfBirth: "1990-11-01",
    fullname() { return this.fname + " " + this.lname; },
    age() { return calculateAge(this.dateOfBirth); }
},
{
    fname: "Mike",
    lname: "Lake",
    dateOfBirth: "2000-09-11",
    fullname() { return this.fname + " " + this.lname; },
    age() { return calculateAge(this.dateOfBirth); }
}];

console.log(myData);
console.log(myData[0].fullname());
console.log(myData[0].age());

console.log(myData[1].fullname());
console.log(myData[1].age());


console.log(myData[2].fullname());
console.log(myData[2].age());