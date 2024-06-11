let arr = [];
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        arr.push(i * 2);
    } else {
        arr.push(i);
    }
}
console.log(arr);